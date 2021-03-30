<template>
  <div>
    <div
      class="mb-sm-50 mb-30 row no-gutters align-items-center justify-content-between"
    >
      <div class="heading-4 bold flex-1 pr-20">
        {{ featuredTag ? featuredTag.name : 'Courses' }}
      </div>
      <button class="button-secondary" id="center-selector" v-if="withToggle">
        All
      </button>
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
    withToggle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sortedCourses() {
      return this.featuredTag.tag.courses.sort(
        (a, b) => a.runs[0].price - b.runs[0].price
      )
    },
    collapsedCourses() {
      return this.featuredTag ? this.sortedCourses : this.courses
    },
  },
}
</script>
