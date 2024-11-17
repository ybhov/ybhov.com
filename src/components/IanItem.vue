<script>
import golfingImage from '@/assets/golfing.png'

export default {
  data() {
    return {
      image: golfingImage
    }
  }
}
</script>

<template>
  <div class="container">
    <section class="ian">
      <p>Hi! I'm Ian, I like to code and watch sports. This is my playground.</p>
      <div class="image-container">
        <img
          :src="image"
          :alt="`Ian golfing`"
          class="image"
        />
      </div>
    </section>
  </div>
</template>

<style>
.container {
  text-align: center;
}

.ian p {
  width: 100%;
  font-size: 1rem;
  margin-top: 0.25rem;
  font-weight: bold;
  text-align: center;
}

.image-container {
  width: auto;
  height: 100%;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>
