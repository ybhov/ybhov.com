<template>
  <nav class="nav-bar">
    <RouterLink to="/" class="nav-link">Home</RouterLink>
    <RouterLink to="/employment" class="nav-link">Employment</RouterLink>
    <RouterLink to="/about" class="nav-link">About</RouterLink>
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
