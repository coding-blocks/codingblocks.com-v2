<template>
  <div class="pl-4">
    <div style="border-left: solid 1px #cccccc">
      <div class="mb-md-50 pl-30">
        <div class="t-align-sm-l t-align-c">
          <div class="heading-4 bold">Full Stack Web Development Track</div>
          <div class="mt-2 text-grey">
            Learn full-stack web development using JavaScript & NodeJS
          </div>
        </div>
      </div>
      <!-- This part would be in loop for each course -->
      <!-- <div v-for="(course, index) in courses" :key="index"> -->
      <div class="pl-30 pt-40 position-relative">
        <div class="position-relative">
          <div class="track-indicator complete">•</div>
          <div class="orange bold">COURSE 1</div>
        </div>
        <div class="row align-items-center mt-xl-5 mt-4">
          <div class="col-xl-6 col-12 mb-xl-0 mb-4">
            <div class="row no-gutters align-items-center">
              <div>
                <img
                  src="https://minio.codingblocks.com/amoeba/1258c47b-f95d-4a71-a2ce-b87ced5e5ae2.png"
                  alt="COURSE Logo"
                  class="s-60x60 br-50"
                />
              </div>
              <div class="flex-1 pl-30">
                <h5 class="bold">C++ Fundamentals</h5>
                <div class="font-normal mt-2">
                  Mentor: Prateek Narang , Kartik Mathur
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-6">
            <!-- Uncomment this when dynamic data added -->

            <!-- <RatingsComponent
              :rating="course.rating"
              :num_ratings="course['review-count']"
            /> -->
          </div>
          <div class="col-xl-3 col-6">
            <div class="row no-gutters justify-content-end align-items-center">
              <a
                href="/courses/c-plus-plus-basics"
                target="_blank"
                class="button-tertiary"
              >
                Explore
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                  class="ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="divider-h content-divider mt-40 pl-30"></div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import RatingsComponent from '@/components/misc/RatingsComponent.vue'

export default {
  props: ['id'],
  components: {
    RatingsComponent,
  },
}
</script>

<style scoped>
.track-indicator {
  top: -12px !important;
  left: -38px !important;
  font-size: 30px !important;
}
</style>
