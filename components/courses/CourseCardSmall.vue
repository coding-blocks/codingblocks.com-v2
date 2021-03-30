<template>
  <div
    class="card card--equal-height card--course theme-pink justify-content-center"
  >
    <div class="card__header card__header--border-highlight mb-none">
      <div>
        <div
          class="s-90x90 br-5 p-15 all-center position-relative card--course__logo theme-background"
        >
          <img :src="course.logo" />
          <div class="card--course__logo__tag">{{ course.difficulty }}</div>
        </div>
      </div>
      <div class="flex-1 px-20">
        <div
          class="heading-5 bold theme-text text-clamp-ellipses text-clamp-ellipses--2 word-wrap"
        >
          {{ course.title }}
        </div>
        <div class="mt-10">
          <RatingsComponent
            :rating="course.rating"
            :num_ratings="course.number_ratings"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'
import RatingsComponent from '@/components/misc/RatingsComponent.vue'

export default {
  props: {
    course: {
      type: Object,
    },
  },
  components: {
    RatingsComponent,
  },
  computed: {
    topRun() {
      return this.course.batches.sort((a, b) => a.price - b.price)[0]
    },
    price() {
      return this.topRun ? this.topRun.price : 9999
    },
    mrp() {
      return this.topRun ? this.topRun.mrp : ''
    },
    startDateString() {
      return formatTimestamp(this.topRun.startDate)
    },
  },
}
</script>
