<script setup lang="ts">
defineProps({
  job: Object
})
</script>

<template>
  <div class="employment">
    <h2>{{ job.position }}</h2>
    <p class="company-name">{{ job.company }}</p>
  </div>
</template>

<style>
p {
  text-align: left;
}

.company-name {
  font-weight: bold;
  font-style: italic;
}
</style>
