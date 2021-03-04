<template>
  <div
    class="col-md-4 col-sm-5 col-8 flex-col justify-content-between blog-post"
  >
    <img :src="blog.image" class="w-100" />
    <div class="mt-2 w-100">
      <div class="heading-4 bold mt-4">{{ blog.title }}</div>
      <div class="mt-3">
        <div class="heading-6 text-clamp-ellipses text-clamp-ellipses--2">
          {{ blog.body }}
        </div>
      </div>
      <a class="button-tertiary mt-50" :href="blog.link">
        Read More
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
          class="ml-2"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog'],
}
</script>
