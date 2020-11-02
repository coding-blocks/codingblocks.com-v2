<template>
  <div class="col-xl-9 mt-xl-none mt-50">
    <div class="flex-row align-items-center">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-big-left-inactive.svg"
        class="pointer d-md-block d-none"
      />
      <div class="row mx-lg-40 mx-md-20 c-card-carousel">
        <!-- <EventsCard /> -->
        <slot></slot>
      </div>
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-big-right-active.svg"
        class="pointer d-md-block d-none"
      />
    </div>
  </div>
</template>
