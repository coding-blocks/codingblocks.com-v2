<template>
  <div class="flex-row align-items-center carousel-container">
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-left-black.svg"
      class="pointer"
      style="height: 30px"
      id="move-left"
    />
    <div class="row mx-sm-40 mx-20 c-card-carousel" id="carousel">
      <slot></slot>
    </div>
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-right-black.svg"
      class="pointer"
      style="height: 30px"
      id="move-right"
    />
  </div>
</template>

<script>
export default {
  mounted() {
    const carouselContainers = document.querySelectorAll('.carousel-container')

    ;[...carouselContainers].forEach((container) => {
      const leftButton = container.querySelector('#move-left')
      const rightButton = container.querySelector('#move-right')
      const carousel = container.querySelector('#carousel')
      let length = carousel.querySelectorAll('.carousel__slide').length

      let counter = 0

      leftButton.addEventListener('click', () => {
        --counter
        if (counter < 0) counter = length

        carousel.scrollTo({
          top: 0,
          left: counter * carousel.clientWidth,
          behavior: 'smooth',
        })
      })

      rightButton.addEventListener('click', () => {
        ++counter
        if (counter > length) counter = 0

        carousel.scrollTo({
          top: 0,
          left: counter * carousel.clientWidth,
          behavior: 'smooth',
        })
      })
    })
  },
}
</script>
