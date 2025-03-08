<template>
  <section class="innerview">
    <ProjectItem
      v-for="project in projects"
      :key="project.name"
      :projectName="project.name"
      :description="project.description"
      :logoUrl="project.logoUrl"
      :githubUrl="project.githubUrl"
    />
  </section>
</template>

<script setup lang="ts">
import ProjectItem from '../components/ProjectItem.vue'

const projects = [
  {
    name: 'Web Site',
    description:
      'This is the code that powers my personal website. It is written in Vue 3 and TypeScript. It is deployed with AWS CDK.',
    logoUrl: '/path/to/project1-logo.png',
    githubUrl: 'https://github.com/ybhov/ybhov.com'
  },
  {
    name: 'Project 2',
    description: 'This is a description of Project 2.',
    logoUrl: '/path/to/project2-logo.png',
    githubUrl: 'https://github.com/yourusername/project2'
  }
  // Add more projects as needed
]
</script>
