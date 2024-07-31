<template>
  <header>
    <h1>ybhov</h1>
    <div>
      <a :href="'https://github.com/ianhovde'" target="_blank">
        <img alt="Github Link" class="logo-links" src="@/assets/github-mark.svg" />
      </a>
      <a :href="'https://twitter.com/ybhov19'" target="_blank">
        <img alt="X Link" class="logo-links" src="@/assets/x-black.png" />
      </a>
      <a :href="'https://linkedin.com/in/ianhovde'" target="_blank">
        <img alt="X Link" class="logo-links" src="@/assets/linkedin-logo-bl.png" />
      </a>
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  max-height: 100vh;
  padding-bottom: 0.5rem;
}

.logo-links {
  padding-right: 2rem;
  max-height: 2rem;
  margin-bottom: 0.5rem;
}

h1 {
  font-weight: bold;
  padding-left: 3rem;
  font-size: 2rem;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
}
</style>
