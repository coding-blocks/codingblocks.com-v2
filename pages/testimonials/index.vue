<template>
  <div class="a-cbm" style="margin-top: -70px">
    <Navigation />

    <div class="landing-page">
      <MajorSuccessStories />

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
