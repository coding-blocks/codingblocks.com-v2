<template>
  <div class="slideshow-container mt-50">
    <div class="row no-gutters c-card-carousel" id="banner-carousel">
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="slideshow-container__slide col-12 p-xl-100 p-lg-75 p-md-50 p-sm-40 p-25 pb-100 d-block"
        :class="`bg-gradient-${banner.bg_color}`"
      >
        <div class="row align-items-center no-gutters">
          <div class="flex-1 z-pos t-align-lg-l t-align-c pr-lg-20">
            <div
              class="br-5 d-inline-block p-2 bg-gradient-orange-light mb-10 font-4 white"
            >
              {{ banner.tag }}
            </div>
            <div class="heading-font stroke-font stroke-font--white">
              {{ banner.heading1 }}
            </div>
            <div class="heading-font white">
              {{ banner.heading2 }}
            </div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_welcome.svg"
            />
            <img :src="banner.img_url" class="d-lg-none d-block" />
            <div class="my-50">
              <div class="heading-2 bold text-orange">
                {{ banner.tagline }}
              </div>
              <div class="mt-2 white heading-5">
                {{ banner.subText }}
              </div>
            </div>
            <div>
              <a :href="banner.cta" class="button-primary">
                Explore
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
              </a>
            </div>
          </div>
          <div class="col-5 d-lg-block d-none">
            <img :src="banner.img_url" />
          </div>
        </div>
      </div>
    </div>

    <a
      class="slideshow-container__prev pulse"
      id="move-left"
      v-on:click="moveLeft()"
    >
      <span>&#10094;</span>
    </a>
    <a
      class="slideshow-container__next pulse"
      id="move-right"
      v-on:click="moveRight()"
    >
      <span>&#10095;</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [],
      counter: 0,
    }
  },
  async fetch() {
    this.banners = await this.$repositories.home.banners()
  },
  methods: {
    moveLeft() {
      const slideShowContainer = document.querySelector('.slideshow-container')
      const carousel = slideShowContainer.querySelector('#banner-carousel')
      const carouselLength = carousel.querySelectorAll(
        '.slideshow-container__slide'
      ).length
      --this.counter
      if (this.counter < 0) this.counter = carouselLength - 1

      carousel.scrollTo({
        top: 0,
        left: this.counter * carousel.clientWidth,
        behavior: 'smooth',
      })
    },
    moveRight() {
      const slideShowContainer = document.querySelector('.slideshow-container')
      const carousel = slideShowContainer.querySelector('#banner-carousel')
      const carouselLength = carousel.querySelectorAll(
        '.slideshow-container__slide'
      ).length
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
