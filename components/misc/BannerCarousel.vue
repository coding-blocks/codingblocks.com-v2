<template>
  <div
    class="slideshow-container mt-50 row no-gutters c-card-carousel"
    id="carousel"
  >
    <div v-if="banners.length != 0">
      <div
        v-for="(banner, index) in banners"
        :key="index"
        class="slideshow-container__slide col-12 p-xl-100 p-lg-75 p-md-50 p-sm-40 p-25 pb-100"
        :class="banner.background"
      >
        <div class="row align-items-center no-gutters">
          <div class="col-xl-6 col-lg-8 z-pos t-align-lg-l t-align-c">
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
            <img :src="banner.image" class="d-lg-none d-block" />
            <div class="my-50">
              <div class="heading-2 bold text-orange">
                {{ banner.tagline }}
              </div>
              <div class="mt-2 white heading-5">
                {{ banner.subTagline }}
              </div>
            </div>
            <div>
              <button class="button-primary">
                {{ banner.cta }}
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
              </button>
            </div>
          </div>
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/light-theme-vector.svg"
          class="landing-page__section__vector d-lg-block d-none"
        />
      </div>
    </div>

    <a class="slideshow-container__prev pulse" id="move-left">
      <span>&#10094;</span>
    </a>
    <a class="slideshow-container__next pulse" id="move-right">
      <span>&#10095;</span>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    const leftButton = document.querySelector('#move-left')
    const rightButton = document.querySelector('#move-right')
    const carousel = document.querySelector('#carousel')

    leftButton.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: -carousel.clientWidth,
        behavior: 'smooth',
      })
    })

    rightButton.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: carousel.clientWidth,
        behavior: 'smooth',
      })
    })
  },
  data() {
    return {
      banners: [],
    }
  },
  async fetch() {
    this.banners = await this.$repositories.home.banners()
  },
}
</script>
