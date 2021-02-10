<template>
  <div class="col-lg-9 mt-lg-none mt-50">
    <div class="flex-row align-items-center">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-left-black.svg"
        class="pointer d-md-block d-none"
      />
      <div class="row mx-sm-40 c-card-carousel">
        <slot></slot>
      </div>
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-right-black.svg"
        style="height: 30px;"
      />
    </div>
  </div>
</template>
