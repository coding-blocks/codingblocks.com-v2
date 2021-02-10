<template>
  <div class="col-lg-9 mt-lg-none mt-50">
    <div class="flex-row align-items-center">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-left-black.svg"
        class="pointer"
        style="height: 30px;"
      />
      <div class="row mx-sm-40 mx-20 c-card-carousel">
        <slot></slot>
      </div>
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-right-black.svg"
        class="pointer"
        style="height: 30px;"
      />
    </div>
  </div>
</template>
