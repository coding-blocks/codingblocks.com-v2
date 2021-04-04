<template>
  <div class="landing-page">
    <div class="landing-page__section pt-none">
      <div class="width-limiter">
        <BannerCarousel />
      </div>
    </div>

    <UpcomingEventsSection />

    <UpcomingCourseSection />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import BannerCarousel from '@/components/misc/BannerCarousel.vue'
import UpcomingEventsSection from '@/components/events/UpcomingEventsSection.vue'
import UpcomingCourseSection from '@/components/events/UpcomingCourseSection.vue'

export default {
  components: {
    Navigation,
    BannerCarousel,
    UpcomingEventsSection,
    UpcomingCourseSection,
  },
}
</script>
