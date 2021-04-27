<template>
  <div class="flex-row align-items-center carousel-container">
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-left-black.svg"
      class="pointer"
      style="height: 30px"
      id="move-left"
      v-on:click="moveLeft()"
    />
    <div class="row mx-sm-30 mx-10 c-card-carousel" id="carousel">
      <slot></slot>
    </div>
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-right-black.svg"
      class="pointer"
      style="height: 30px"
      id="move-right"
      v-on:click="moveRight()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    moveLeft() {
      const carouselContainer = document.querySelector('.carousel-container')
      const carousel = carouselContainer.querySelector('#carousel')
      const carouselSlideWidth = carousel.querySelectorAll(
        '.carousel__slide'
      )[0].clientWidth
      const carouselLength = carousel.querySelectorAll('.carousel__slide')
        .length
      const widthRatio = Math.floor(carousel.clientWidth / carouselSlideWidth)

      --this.counter

      if (widthRatio !== 1) {
        if (this.counter < 0) this.counter = carouselLength - widthRatio
      } else {
        if (this.counter < 0) this.counter = carouselLength - 1
      }

      carousel.scrollTo({
        top: 0,
        left: this.counter * carouselSlideWidth,
        behavior: 'smooth',
      })
    },
    moveRight() {
      const carouselContainer = document.querySelector('.carousel-container')
      const carousel = carouselContainer.querySelector('#carousel')
      const carouselSlideWidth = carousel.querySelectorAll(
        '.carousel__slide'
      )[0].clientWidth
      const carouselLength = carousel.querySelectorAll('.carousel__slide')
        .length
      const widthRatio = Math.floor(carousel.clientWidth / carouselSlideWidth)

      ++this.counter

      if (widthRatio !== 1) {
        if (this.counter > carouselLength - widthRatio) this.counter = 0
      } else {
        if (this.counter > carouselLength - 1) this.counter = 0
      }

      carousel.scrollTo({
        top: 0,
        left: this.counter * carouselSlideWidth,
        behavior: 'smooth',
      })
    },
  },
}
</script>
