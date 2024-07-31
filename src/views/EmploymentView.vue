<script setup lang="ts">
import EmploymentItem from '../components/EmploymentItem.vue'
import workHistory from '../components/data/Employment.json'
</script>

<template>
  <section>
    <EmploymentItem v-for="(job, index) in workHistory" :key="index" :job="job" />
  </section>
</template>

<style>
.employment {
  margin-left: 1rem;
}
</style>
