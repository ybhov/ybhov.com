<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  job: Object
})

const formattedDescription = computed(() => {
  return props.job?.description.replace(/\n/g, '<br>')
})
</script>

<template>
  <div class="employment">
    <h2>{{ job?.position }}</h2>
    <div class="company-name-date">
      <p class="company-name">{{ job?.company }}</p>
      <p>{{ job?.startDate }} - {{ job?.endDate }}</p>
    </div>
    <p v-html="formattedDescription"></p>
  </div>
</template>

<style>
.employment h2 {
  margin-bottom: 0;
}
.employment p {
  text-align: left;
  padding: 0;
  margin: 0;
}

.company-name {
  font-style: italic;
}

.company-name-date {
  display: flex;
  justify-content: space-between;
}
</style>
