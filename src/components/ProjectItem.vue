<template>
  <div class="project-item">
    <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
      <img :src="logoUrl" :alt="projectName + ' logo'" class="project-logo" />
    </a>
    <div class="project-info">
      <h3>{{ projectName }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  projectName: String,
  description: String,
  logoUrl: String,
  githubUrl: String
})
</script>

<style scoped>
.project-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.project-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 1rem;
}

.project-info {
  flex: 1;
}

.project-info h3 {
  margin: 0 0 0.5rem 0;
  color: var(--vt-c-denim);
}

.project-info p {
  margin: 0;
  color: var(--vt-c-payesgray);
}
</style>
