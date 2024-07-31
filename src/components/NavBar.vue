<template>
  <nav class="nav-bar">
    <RouterLink to="/" class="nav-link">Employment</RouterLink>
    <!-- <RouterLink to="/projects" class="nav-link">Projects</RouterLink> -->
    <!-- <RouterLink to="/crypto" class="nav-link">Crypto</RouterLink> -->
  </nav>
</template>

<style>
.nav-bar {
  display: flex;
  justify-content: left;
  font-size: 1.5rem;
  background-color: var(--vt-c-rosequartz);
}

.nav-link {
  margin-left: 2rem;
  text-decoration: none;
}
</style>
