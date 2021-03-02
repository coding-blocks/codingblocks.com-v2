<template>
  <div class="col-6 h-inherit">
    <div class="flex-col justify-content-between h-100 align-items-start">
      <img :src="news.news_logo" :style="{ height: '45px' }" />
      <div>
        <div class="heading-5 my-50 text-clamp-ellipses text-clamp-ellipses--2">
          {{ news.news_text }}
        </div>
        <a class="button-tertiary" :href="news.news_link">
          Read More
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['news'],
}
</script>
