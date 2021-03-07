<template>
  <div class="card card--equal-height card--course" :class="course.theme">
    <div class="card__header card__header--border-highlight">
      <div class="flex-1">
        <div
          class="s-90x90 br-5 p-15 all-center position-relative card--course__logo theme-background"
        >
          <img :src="course.logo" />
          <div class="card--course__logo__tag">{{ course.difficulty }}</div>
        </div>
      </div>
      <div class="t-align-r">
        <div class="font-2">Starting from</div>
        <div class="heading-4 bold">{{ price > 0 ? `₹${price}` : 'Free' }}</div>
        <del class="font-4 text-grey-light-1">{{ `₹${mrp}` }}</del>
      </div>
    </div>
    <div>
      <div class="heading-5 theme-text bold mb-10">{{ course.title }}</div>
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
            this.course['number_ratings']
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

        <nuxt-link :to="`/courses/${course.slug}`" class="button-tertiary">
          Explore
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </nuxt-link>
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
