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
      <div
        class="heading-5 theme-text bold mb-10 text-clamp-ellipses text-clamp-ellipses--2"
      >
        {{ course.title }}
      </div>
      <RatingsComponent
        :rating="course.rating"
        :num_ratings="course.number_ratings"
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
      const wrongFormatDate = this.topRun.startDate
      let rightFormatDate = wrongFormatDate.split('-')
      let temp = rightFormatDate[0]
      rightFormatDate[0] = rightFormatDate[2]
      rightFormatDate[2] = temp

      return rightFormatDate.join('/')
    },
  },
}
</script>
