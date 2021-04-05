<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="row align-items-center no-gutters">
        <div class="col-lg-4 order-lg-1 order-2">
          <div class="row no-gutters justify-content-center">
            <div>
              <div
                :class="'bg-gradient-' + course.theme.split('-')[1]"
                class="card bg-grey all-center d-lg-flex d-none mx-auto mb-50"
                style="height: 200px; width: 200px"
              >
                <img :src="course.logo" />
              </div>
              <YoutubeVideoPlayer :url="course.video_link" />
            </div>
          </div>
        </div>
        <div class="col-lg-8 mb-lg-none mb-40 order-lg-2 order-1">
          <div class="pl-lg-50 t-align-lg-l t-align-c">
            <div
              class="card all-center d-lg-none d-flex mx-auto mb-30 s-150x150"
              :class="'bg-gradient-' + course.theme.split('-')[1]"
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
              class="row no-gutters justify-content-lg-start justify-content-center"
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
