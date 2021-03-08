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
          class="heading-5 bold theme-text text-clamp-ellipses text-clamp-ellipses--2"
        >
          {{ course.title }}
        </div>
        <div class="row no-gutters align-items-center mt-10">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
            class="mr-1"
            style="height: 10px"
          />
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
            class="mr-1"
            style="height: 10px"
          />
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
            class="mr-1"
            style="height: 10px"
          />
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
            class="mr-1"
            style="height: 10px"
          />
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_unfilled.svg"
            class="mr-1"
            style="height: 10px"
          />
          <div class="font-1 text-grey ml-2 flex-1">
            <strong>{{ this.course.rating }}/5,</strong>&nbsp;{{
              this.course['number_ratings']
            }}
            ratings
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatTimestamp } from '~/utils/date'

export default {
  props: {
    course: {
      type: Object,
    },
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
      return this.topRun.startDate
    },
  },
}
</script>
