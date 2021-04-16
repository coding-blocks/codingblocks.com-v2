<template>
  <div class="py-50 position-relative">
    <div
      class="width-limiter position-absolute w-100 error-text-container px-30"
    >
      <div class="error-text position-absolute">
        <div class="heading-4 bold">Page not found.</div>
        <div class="bold text404">Error 404</div>
        <a href="/" class="heading-5 bold text-gradient-orange">
          Click here to restart the journey!
        </a>
      </div>
    </div>
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/error-404.svg"
      class="w-100 mt-sm-none mt-100"
    />
  </div>
</template>

<script>
export default {
  layout: 'error',
}
</script>

<style scoped>
.error-text-container {
  left: 50%;
  transform: translateX(-50%);
}

.error-text {
  color: #696969;
}

.error-text .text404 {
  font-size: 4.5rem;
}
</style>
