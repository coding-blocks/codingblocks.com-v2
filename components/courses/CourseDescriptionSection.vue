<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row align-items-center no-gutters">
        <div class="flex-1 pr-lg-50">
          <div
            class="row no-gutters align-items-center justify-content-between"
          >
            <div class="flex-1">
              <div
                class="row no-gutters align-items-center justify-content-between mb-20"
              >
                <div
                  class="card all-center s-120x120 course-logo-big-square p-sm-30 p-20"
                  :class="'bg-gradient-' + course.theme.split('-')[1]"
                >
                  <img :src="course.logo" />
                </div>
                <div class="flex-1 pl-sm-30 pl-20">
                  <div
                    class="heading-3 bold text-clamp-ellipses text-clamp-ellipses--3"
                  >
                    {{ course.title }}
                  </div>
                </div>
              </div>
              <div
                class="font-4 mb-20 text-clamp-ellipses text-clamp-ellipses--3 t-align-lg-l t-align-c"
              >
                {{ course.description }}
              </div>
              <div
                class="row no-gutters justify-content-lg-start justify-content-center t-align-lg-l t-align-c"
              >
                <div
                  class="br-5 d-inline-block p-2 bg-gradient-orange-light mr-30 font-2 white"
                >
                  <span class="v-align-m">
                    {{ course.difficulty.toUpperCase() }}
                  </span>
                </div>
                <div class="mr-30">
                  <div class="font-2">Course Language</div>
                  <div class="font-4 bold mt-1">
                    {{ course.languages.join() }}
                  </div>
                </div>
                <div>
                  <div class="font-2">Course Duration</div>
                  <div class="font-4 bold mt-1">{{ course.duration }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-lg-block d-none">
          <YoutubeVideoPlayer :url="course.video_link" />
        </div>
      </div>
      <div class="d-lg-none d-flex justify-content-center mt-40">
        <YoutubeVideoPlayer :url="course.video_link" />
      </div>
    </div>
  </div>
</template>

<script>
import YoutubeVideoPlayer from '@/components/misc/YoutubeVideoPlayer.vue'
export default {
  components: {
    YoutubeVideoPlayer,
  },
  props: {
    course: {
      type: Object,
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 575px) {
  .course-logo-big-square {
    height: 100px !important;
    width: 100px !important;
  }
}
</style>
