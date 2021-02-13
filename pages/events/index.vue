<template>
  <div class="a-cbm" style="margin-top: -70px;">
    <Navigation />

    <div class="landing-page">
      <div class="landing-page__section">
        <div class="width-limiter">
          <BannerCarousel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import BannerCarousel from "@/components/misc/BannerCarousel.vue";
import UpcomingEventsSection from "@/components/events/UpcomingEventsSection.vue";

export default {
  components: {
    Navigation,
    BannerCarousel,
    UpcomingEventsSection,
  },
};
</script>
