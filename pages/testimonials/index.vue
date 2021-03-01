<template>
  <div class="a-cbm" style="margin-top: -70px">
    <Navigation />

    <div class="landing-page">
      <MajorSuccessStories />

      <div class="landing-page__section">
        <div class="t-align-c">
          <div class="heading-4 bold mb-50">Students got placed at</div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import MajorSuccessStories from '@/components/testimonials/MajorSuccessStories.vue'

export default {
  components: {
    MajorSuccessStories,
  },
}
</script>
