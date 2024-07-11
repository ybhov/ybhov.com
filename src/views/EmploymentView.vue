<script setup lang="ts">
import Employment from '../components/Employment.vue'
import workHistory from '../components/Employment.json'
</script>

<template>
  <section>
    <Employment v-for="(job, index) in workHistory" :key="index" :job="job" />
  </section>
</template>

<style>
.employment {
  margin-left: 1rem;
}
</style>
