<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import NavBar from './components/NavBar.vue'
import IanItem from './components/IanItem.vue'
</script>

<template>
  <AppHeader />
  <div class="page-wrapper">
    <section class="left-section">
      <IanItem />
    </section>
    <section class="right-section">
      <div class="top-part">
        <NavBar />
      </div>
      <div class="bottom-part">
        <RouterView />
      </div>
    </section>
  </div>
  <AppFooter />
</template>

<style scoped>
.page-wrapper {
  display: flex;
  border-top: 0.25rem solid var(--color-border);
}

.left-section {
  border-right: 0.25rem solid var(--color-border);
  width: 350px;
  padding-right: 2rem;
}

.right-section {
  flex: 1; /* Flexible width */
}

.top-part {
  border-bottom: 0.25rem solid var(--color-border);
}

@media (max-width: 768px) {
  .page-wrapper {
    flex-direction: column;
  }

  .left-section {
    border-right: none;
    border-bottom: 0.25rem solid var(--color-border);
    width: 100%;
    padding-right: 0;
    padding-bottom: 2rem;
  }

  .right-section {
    width: 100%;
  }
}
</style>
