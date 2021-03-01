<template>
  <div class="a-cbm" style="margin-top: -70px">
    <Navigation />

    <div class="landing-page">
      <SuccessStoriesSection />

      <Footer />
    </div>
  </div>
</template>

<script>
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection.vue'

export default {
  components: {
    SuccessStoriesSection,
  },
}
</script>
