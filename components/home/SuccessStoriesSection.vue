<template>
  <!-- Success Stories Section -->
  <div class="landing-page__section">
    <div v-if="!stories.legnth" class="width-limiter">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="flex-1 t-align-lg-l t-align-c">
          <div class="heading-font stroke-font">HALL OF FAME</div>
          <div class="heading-font">SUCCESS STORIES</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_success.svg"
          />
        </div>
      </div>
      <div class="mt-sm-50 mt-25">
        <CardCarousel>
          <SuccessStory
            :story="story"
            v-for="(story, index) in stories"
            :key="index"
          />
        </CardCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/misc/CardCarousel.vue'
import SuccessStory from '@/components/misc/SuccessStory.vue'

export default {
  components: {
    CardCarousel,
    SuccessStory,
  },
  data(){
    return {
      stories: [],
    }
  },
  async fetch(){
    this.stories = await this.$repositories.home.successStories();
  }
}
</script>
