<template>
  <div
    class="card card--equal-height card--course theme-pink justify-content-center"
    :class="themes[Math.floor(Math.random() * (5 + 1))]"
  >
    <div class="card__header card__header--border-highlight mb-none">
      <div>
        <div
          class="s-90x90 br-5 p-15 all-center position-relative card--course__logo theme-background"
        >
          <img :src="course.logo" />
          <div class="card--course__logo__tag">{{ difficultyText }}</div>
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
            :num_ratings="course['review-count']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'
import RatingsComponent from '@/components/misc/RatingsComponent.vue'

import {
  topRunForCourse,
  textForDifficulty,
  freeTrialRunForCourse,
} from '~/utils/course'

export default {
  props: {
    course: {
      type: Object,
    },
    type: 'online',
  },
  data() {
    return {
      themes: [
        'theme-pink',
        'theme-blue',
        'theme-orange',
        'theme-green',
        'theme-purple',
      ],
    }
  },
  components: {
    RatingsComponent,
  },
  computed: {
    topRun() {
      return topRunForCourse(this.course)
    },
    freeTrialRun() {
      return freeTrialRunForCourse(this.course)
    },
    price() {
      return this.freeTrialRun ? this.freeTrialRun.price : 9999
    },
    mrp() {
      return this.freeTrialRun ? this.freeTrialRun.mrp : ''
    },
    difficultyText() {
      return textForDifficulty(this.course.difficulty)
    },
    startDateString() {
      return formatTimestamp(this.topRun.start)
    },
  },
}
</script>
