<template>
  <div class="col-6 h-inherit">
    <div class="flex-col justify-content-between h-100 align-items-start">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/et_logo.svg"
      />
      <div>
        <div class="heading-5 my-50 text-clamp-ellipses text-clamp-ellipses--2">
          Coding Blocks is the most promising edtech startup
        </div>
        <div class="button-tertiary">
          Read More
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news_logo", "news_text"],
};
</script>
