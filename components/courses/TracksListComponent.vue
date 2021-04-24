<template>
  <div v-if="track" class="pl-4">
    <div style="border-left: solid 1px #cccccc">
      <div class="mb-md-50 pl-30">
        <div class="t-align-sm-l t-align-c">
          <div class="heading-4 bold">{{ track.name }} Track</div>
          <div class="mt-2 text-grey">
            {{ track.description }}
          </div>
        </div>
      </div>
      <!-- This part would be in loop for each course -->
      <div v-for="(course, index) in courses" :key="index">
        <div class="pl-30 pt-40 position-relative">
          <div class="position-relative">
            <div class="track-indicator complete">•</div>
            <div class="orange bold">COURSE {{ index + 1 }}</div>
          </div>
          <div class="row align-items-center mt-xl-5 mt-4">
            <div class="col-xl-6 col-12 mb-xl-0 mb-4">
              <div class="row no-gutters align-items-center">
                <div>
                  <img
                    :src="course.logo"
                    alt="COURSE Logo"
                    class="s-60x60 br-50"
                  />
                </div>
                <div class="flex-1 pl-30">
                  <h5
                    class="bold text-clamp-ellipses text-clamp-ellipses--2 word-wrap"
                  >
                    {{ course.title }}
                  </h5>
                  <div class="font-normal mt-2">
                    Mentor: {{ course.instructors.map((i) => i.name).join() }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-6">
              <RatingsComponent
                :rating="course.rating"
                :num_ratings="course['review-count']"
              />
            </div>
            <div class="col-xl-3 col-6">
              <div
                class="row no-gutters justify-content-end align-items-center"
              >
                <a
                  :href="`https://online.codingblocks.com/courses/${course.slug}`"
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
      </div>
    </div>
  </div>
  <div class="h-100 all-center" v-else>
    <div>
      <img
        src="https://minio.codingblocks.com/amoeba/online-loader.gif"
        alt="loading..."
      />
    </div>
  </div>
</template>

<script>
import RatingsComponent from '@/components/misc/RatingsComponent.vue'

export default {
  props: {
    id: {
      type: String,
      default: 1,
    },
  },
  components: {
    RatingsComponent,
  },
  data() {
    return {
      track: null,
      courses: [],
      loading: false,
    }
  },
  watch: {
    id: {
      async handler(newVal, oldVal) {
        this.loading = true
        this.track = null
        let [track, courses] = await Promise.all([
          this.$repositories.courses.fetchTrackById(newVal?? 1),
          this.$repositories.courses.fetchCourseForTrack(newVal?? 1),
        ])
        this.track = track
        this.courses = courses
        this.loading = false
      },
      immediate: true,
    },
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
