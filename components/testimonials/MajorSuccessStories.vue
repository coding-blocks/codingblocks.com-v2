<template>
  <!-- Success Stories Section -->
  <div class="landing-page__section">
    <div class="width-limiter">
      <CardCarousel class="card align-items-center">
        <MajorSuccessStoryCard
          :story="story"
          v-for="(story, index) in majorStories"
          :key="index"
          :class="`carousel_slide`"
        />
      </CardCarousel>

      <div class="mt-sm-100 mt-50">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 h-inherit mb-sm-50 mb-30"
            v-for="(story, index) in otherStories"
            :key="index"
          >
            <SuccessStoryCard :story="story" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardCarousel from '@/components/misc/CardCarousel.vue'
import MajorSuccessStoryCard from '@/components/testimonials/MajorSuccessStoryCard.vue'
import SuccessStoryCard from '@/components/misc/SuccessStoryCard.vue'

export default {
  data() {
    return {
      stories: [],
    }
  },
  computed: {
    majorStories() {
      return this.stories.slice(0, 3)
    },
    otherStories() {
      return this.stories.slice(3)
    },
  },
  components: {
    CardCarousel,
    MajorSuccessStoryCard,
    SuccessStoryCard,
  },
  async fetch() {
    this.stories = await this.$repositories.home.fetchSuccessStoriesByPage()
  },
}
</script>
