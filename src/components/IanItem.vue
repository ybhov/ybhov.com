<script>
import golfingImage from '@/assets/golfing.png'
import dressedUpIanImage from '@/assets/dressed-up-ian.jpeg'

export default {
  data() {
    return {
      currentIndex: 0,
      images: [golfingImage, dressedUpIanImage]
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    }
  }
}
</script>

<template>
  <div class="container">
    <section class="ian">
      <p>Hi! I'm Ian, I like to code and watch sports. This is my playground.</p>
      <div class="carousel-container">
        <button class="arrow left-arrow" @click="prevImage">&#10094;</button>
        <div class="image-container">
          <img
            :src="images[currentIndex]"
            :alt="`Image ${currentIndex + 1}`"
            class="carousel-image"
          />
        </div>
        <button class="arrow right-arrow" @click="nextImage">&#10095;</button>
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

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-container {
  position: relative;
  width: auto;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  width: auto;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.arrow {
  position: absolute;
  z-index: 10;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.left-arrow {
  left: 0;
}

.right-arrow {
  right: 0;
}
</style>
