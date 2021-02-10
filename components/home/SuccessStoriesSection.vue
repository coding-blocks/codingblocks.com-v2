<template>
  <!-- Success Stories Section -->
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="flex-1 t-align-lg-l t-align-c">
          <div class="heading-font stroke-font">
            HALL OF FAME
          </div>
          <div class="heading-font">
            SUCCESS STORIES
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_success.svg"
          />
        </div>
      </div>
      <div class="mt-50">
        <CardCarousel>
          <SuccessStory />
        </CardCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from "@/components/misc/CardCarousel.vue";
import SuccessStory from "@/components/misc/SuccessStory.vue";

export default {
  components: {
    CardCarousel,
    SuccessStory,
  },
};
</script>
