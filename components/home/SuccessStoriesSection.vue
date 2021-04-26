<template>
  <!-- Success Stories Section -->
  <div v-if="stories.length" class="landing-page__section">
    <div class="width-limiter">
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
          <div
            class="col-lg-4 col-md-6 col-12 h-inherit carousel__slide"
            v-for="(story, index) in stories.slice(0, 9)"
            :key="index"
          >
            <SuccessStoryCard :story="story" />
          </div>
        </CardCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/misc/CardCarousel.vue'
import SuccessStoryCard from '@/components/misc/SuccessStoryCard.vue'

export default {
  components: {
    CardCarousel,
    SuccessStoryCard,
  },
  data() {
    return {
      stories: [],
    }
  },
  async fetch() {
    this.stories = await this.$repositories.home.fetchSuccessStoriesByPage()
  },
}
</script>
