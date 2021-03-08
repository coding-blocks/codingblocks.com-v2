<template>
  <div class="card card--equal-height card--course theme-pink">
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
        <del class="font-4 text-grey-light-1">{{ `₹${mrp}` }}</del>
      </div>
    </div>
    <div>
      <div
        class="heading-5 theme-text bold mb-10 text-clamp-ellipses text-clamp-ellipses--2"
      >
        {{ course.title }}
      </div>
      <div class="row no-gutters align-items-center">
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
          class="mr-xl-10 mr-1"
        />
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_unfilled.svg"
          class="mr-xl-10 mr-1"
        />
        <div class="font-3 text-grey ml-xl-10 ml-2 flex-1">
          <strong>{{ this.course.rating }}/5,</strong>&nbsp;{{
            this.course['review-count']
          }}
          ratings
        </div>
      </div>
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
