<template>
  <div class="landing-page__section pb-none">
    <div class="width-limiter">
      <IntroductionSection />

      <!-- Stats Section -->
      <div class="mt-60 mb-50">
        <div class="t-align-c heading-3 bold mb-50">Why Coding Blocks</div>
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-3 col-sm-5 col-12 mb-25">
            <StatsCard
              stat_number="40K+"
              stat_title="Students Taught"
              icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/workshops-dark.svg"
            />
          </div>
          <div class="col-xl-3 col-sm-5 col-12 mb-25">
            <StatsCard
              stat_number="80LPA"
              stat_title="Package Offered"
              icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/package-dark.svg"
            />
          </div>
          <div class="col-xl-3 col-sm-5 col-12 mb-25">
            <StatsCard
              stat_number="30K+"
              stat_title="Students Placed"
              icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/students-placed-dark.svg"
            />
          </div>
          <div class="col-xl-3 col-sm-5 col-12 mb-25">
            <StatsCard
              stat_number="200%"
              stat_title="Salary Hike"
              icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/placement-training-dark.svg"
            />
          </div>
        </div>
      </div>

      <!-- Banner Section -->
      <BannerCarousel />
    </div>
  </div>
</template>

<script>
import StatsCard from '@/components/misc/StatsCard.vue'
import BannerCarousel from '@/components/misc/BannerCarousel'
import IntroductionSection from '@/components/home/IntroductionSection.vue'

export default {
  components: {
    StatsCard,
    BannerCarousel,
    IntroductionSection,
  },
}
</script>
