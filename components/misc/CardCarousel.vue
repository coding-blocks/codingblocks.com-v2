<template>
  <div class="flex-row align-items-center">
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-left-black.svg"
      class="pointer"
      style="height: 30px;"
      id="move-left"
    />
    <div class="row mx-sm-40 mx-20 c-card-carousel" id="carousel">
      <slot></slot>
    </div>
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-right-black.svg"
      class="pointer"
      style="height: 30px;"
      id="move-right"
    />
  </div>
</template>

<script>
export default {
  // mounted() {
  //   const leftButton = document.querySelector("#move-left");
  //   const rightButton = document.querySelector("#move-right");
  //   const carousel = document.querySelector("#carousel");

  //   leftButton.addEventListener("click", () => {
  //     for (let i = 0; i < 30000; i++) {
  //       carousel.scrollLeft += carousel.clientWidth / 30000;
  //     }
  //     // carousel.scrollLeft += carousel.clientWidth;
  //   });

  //   rightButton.addEventListener("click", () => {
  //     for (let i = 0; i < 30000; i++) {
  //       carousel.scrollLeft -= carousel.clientWidth / 30000;
  //     }
  //     // carousel.scrollLeft -= carousel.clientWidth;
  //   });
  // },
};
</script>
