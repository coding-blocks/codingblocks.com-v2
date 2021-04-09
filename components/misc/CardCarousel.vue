<template>
  <div class="flex-row align-items-center carousel-container">
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-left-black.svg"
      class="pointer"
      style="height: 30px"
      id="move-left"
      v-on:click="moveLeft()"
    />
    <div class="row mx-sm-40 mx-20 c-card-carousel" id="carousel">
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
      const carouselLength = carousel.querySelectorAll('.carousel__slide')
        .length
      --this.counter
      if (this.counter < 0) this.counter = carouselLength - 1

      carousel.scrollTo({
        top: 0,
        left: this.counter * carousel.clientWidth,
        behavior: 'smooth',
      })
    },
    moveRight() {
      const carouselContainer = document.querySelector('.carousel-container')
      const carousel = carouselContainer.querySelector('#carousel')
      const carouselLength = carousel.querySelectorAll('.carousel__slide')
        .length
      ++this.counter
      if (this.counter > carouselLength - 1) this.counter = 0

      carousel.scrollTo({
        top: 0,
        left: this.counter * carousel.clientWidth,
        behavior: 'smooth',
      })
    },
  },
}
</script>
