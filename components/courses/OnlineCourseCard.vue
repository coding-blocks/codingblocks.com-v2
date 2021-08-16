<template>
  <div
    class="card card--equal-height card--course theme-pink"
    :class="themes[Math.floor(Math.random() * (5 + 1))]"
  >
    <div class="card__header card__header--border-highlight">
      <div class="flex-1">
        <div
          class="s-90x90 br-5 p-15 all-center position-relative card--course__logo theme-background"
        >
          <img :src="course.logo" />
          <div class="card--course__logo__tag">{{ difficultyText }}</div>
        </div>
      </div>
      <div class="t-align-r">
        <div class="font-2">Starting from</div>
        <div class="heading-4 bold">{{ price > 0 ? `₹${price}` : 'Free' }}</div>
        <del class="font-4 ">{{ `₹${mrp}` }}</del>
      </div>
    </div>
    <div>
      <div
        class="heading-5 theme-text bold mb-10 text-clamp-ellipses text-clamp-ellipses--2 word-wrap"
      >
        {{ course.title }}
      </div>
      <RatingsComponent
        :rating="course.rating"
        :num_ratings="course['review-count']"
      />
    </div>
    <div class="mt-50">
      <div class="row no-gutters">
        <div class="flex-1 pr-15">
          <div class="font-4">
            <div>NEXT BATCH</div>
            <div class="font-5 bold mt-2">{{ startDateString }}</div>
          </div>
        </div>
        <a
          :href="`https://online.codingblocks.com/courses/${course.slug}`"
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
