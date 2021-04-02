<template>
  <div>
    <div
      class="mb-sm-50 mb-30 row no-gutters align-items-center justify-content-between"
    >
      <div class="heading-4 bold flex-1 pr-20">
        {{ featuredTag ? featuredTag.name : 'Courses' }}
      </div>
      <!-- <button
        class="button-secondary"
        id="center-selector"
        v-if="withToggle"
        v-on:click="updateCenterCounter()"
      >
        {{ selectedCenter }}
      </button> -->
    </div>

    <div>
      <div
        class="row justify-content-lg-start justify-content-md-center justify-content-start h-100"
      >
        <div
          v-for="course in collapsedCourses"
          :key="course.id"
          class="col-lg-4 col-md-5 col-sm-6 mb-50 h-inherit"
        >
          <OnlineCourseCard :course="course" v-if="type == 'online'" />
          <CourseCard :course="course" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/courses/CourseCard.vue'
import OnlineCourseCard from '@/components/courses/OnlineCourseCard.vue'

//Commented code can be used later on if the toggle center button needs to be shifted to this component
export default {
  components: {
    CourseCard,
    OnlineCourseCard,
  },
  props: {
    featuredTag: {
      type: Object,
    },
    courses: {
      type: Array,
    },
    type: {
      type: String,
      default: 'online',
    },
    // withToggle: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  // data() {
  //   return {
  //     centersArray: ['All', 'Pitampura', 'Noida'],
  //     centerCounter: 0,
  //   }
  // },
  computed: {
    // selectedCenter() {
    //   return this.centersArray[this.centerCounter]
    // },
    sortedCourses() {
      return this.featuredTag.tag.courses.sort(
        (a, b) => a.runs[0].price - b.runs[0].price
      )
    },
    collapsedCourses() {
      return this.featuredTag ? this.sortedCourses : this.courses
    },
  },
  // methods: {
  //   updateCenterCounter() {
  //     if (this.centerCounter === this.centersArray.length - 1)
  //       this.centerCounter = 0
  //     else this.centerCounter++
  //   },
  // },
}
</script>
