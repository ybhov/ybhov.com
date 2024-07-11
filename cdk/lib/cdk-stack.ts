import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket configured for website hosting
    const s3Bucket = new cdk.aws_s3.Bucket(this, 'ybhov', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Note: Only for development. For production, consider retaining the bucket.
      autoDeleteObjects: true, // Note: Only for development. For production, consider disabling this.
      blockPublicAccess: new cdk.aws_s3.BlockPublicAccess({
        blockPublicAcls: false,
        ignorePublicAcls: false,
        blockPublicPolicy: false,
        restrictPublicBuckets: false
      }),
    });

    // Create an IAM user for GitHub Actions
    const githubIamUser = new cdk.aws_iam.User(this, 'YbhovUIGitHubUser', {
      userName: 'ybhov-ui-github-user',
    });

    // Grant the GitHub Actions IAM user access to the S3 bucket
    githubIamUser.addToPolicy(new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ['s3:ListBucket','s3:GetObject', 's3:PutObject', 's3:DeleteObject', 's3:ListObjectsV2'],
      resources: [`${s3Bucket.bucketArn}/*`, s3Bucket.bucketArn],
    }));

    // Create an access key for the GitHub Actions IAM user
    new cdk.aws_iam.CfnAccessKey(this, 'YbhovUIGitHubUserAccessKey', {
      userName: githubIamUser.userName,
    });

    // Create Route53 record to point to the CloudFront distribution
    const zone = cdk.aws_route53.HostedZone.fromLookup(this, 'ybhovHostedZone', {
      domainName: 'ybhov.com',
    });

    // Get ARN of certificate from SSM
    const certificateArn = cdk.aws_ssm.StringParameter.valueForStringParameter(this, '/ybhov/certificate/arn');

    // Import cert from certificate manager for CloudFront
    const certificate = cdk.aws_certificatemanager.Certificate.fromCertificateArn(this, 'ybhovCertificate', certificateArn)

    // Create CloudFront distribution
    const cloudFrontDistribution = new cdk.aws_cloudfront.CloudFrontWebDistribution(this, 'ybhovCloudFrontDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: s3Bucket,
          },
          behaviors: [{isDefaultBehavior: true}],
        },
      ],
      viewerCertificate: cdk.aws_cloudfront.ViewerCertificate.fromAcmCertificate(certificate, {
        aliases: ['ybhov.com'],
      }),
    });

    // Grant the GitHub Actions IAM user access to the CloudFront distribution
    githubIamUser.addToPolicy(new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ['cloudfront:CreateInvalidation'],
      resources: [`arn:aws:cloudfront::${this.account}:distribution/${cloudFrontDistribution.distributionId}`],
    }));

    // Create Aaaa record in Route53 to point to the CloudFront
    new cdk.aws_route53.AaaaRecord(this, 'ybhovARecord', {
      recordName: 'ybhov.com',
      zone: zone,
      target: cdk.aws_route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.CloudFrontTarget(cloudFrontDistribution)),
    });
  }
}
