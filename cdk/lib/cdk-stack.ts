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
    const accessKey = new cdk.aws_iam.CfnAccessKey(this, 'YbhovUIGitHubUserAccessKey', {
      userName: githubIamUser.userName,
    });

    // Output the access key and secret access key
    new cdk.CfnOutput(this, 'YbhovUIGitHubUserAccessKeyId', {
      value: accessKey.ref,
    });
    new cdk.CfnOutput(this, 'YbhovUIGitHubUserSecretAccessKey', {
      value: accessKey.attrSecretAccessKey,
    });

    // Create CloudFront distribution
    const cloudFrontDistribution = new cdk.aws_cloudfront.CloudFrontWebDistribution(this, 'ybhovCloudFrontDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: s3Bucket,
          },
          behaviors: [{isDefaultBehavior: true}],
        },
      ]
    });

    // Grant the GitHub Actions IAM user access to the CloudFront distribution
    githubIamUser.addToPolicy(new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ['cloudfront:CreateInvalidation'],
      resources: [`arn:aws:cloudfront::${this.account}:distribution/${cloudFrontDistribution.distributionId}`],
    }));
  }
}
