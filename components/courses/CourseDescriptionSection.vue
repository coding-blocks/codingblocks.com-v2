<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row align-items-center">
        <div class="col-lg-9 mb-lg-none mb-40">
          <div class="row no-gutters align-items-center">
            <div
              class="card bg-gradient-pink all-center d-md-flex d-none"
              :class="course.theme"
              style="height: 250px; width: 250px"
            >
              <img :src="course.logo" />
            </div>
            <div class="flex-1 pl-lg-50 pl-md-30 t-align-md-l t-align-c">
              <div
                class="card all-center d-md-none d-flex mx-auto mb-30 s-150x150"
                :class="course.theme"
              >
                <img :src="course.logo" />
              </div>
              <div
                class="br-5 d-inline-block p-2 bg-gradient-orange-light mb-15 font-2 white"
              >
                {{ course.difficulty }}
              </div>
              <div class="heading-3 mb-20 bold">{{ course.title }}</div>
              <div class="font-4 mb-20">
                {{ course.description }}
              </div>
              <div
                class="row no-gutters justify-content-md-start justify-content-center"
              >
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
        <div class="col-lg-3">
          <YoutubeVideoPlayer :url="course.video_link" />
        </div>
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
