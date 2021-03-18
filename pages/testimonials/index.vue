<template>
  <div class="a-cbm" style="margin-top: -70px">
    <Navigation />

    <div class="landing-page">
      <MajorSuccessStories />

      <div class="landing-page__section bg-white pt-none">
        <div class="width-limiter">
          <div class="t-align-c">
            <div class="heading-4 bold mb-50">Students got placed at</div>
            <div class="mt-50 row no-gutters justify-content-center">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/company_logos.svg"
                class="w-100"
              />
            </div>
          </div>
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
