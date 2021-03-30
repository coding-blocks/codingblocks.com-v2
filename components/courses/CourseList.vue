<template>
  <div>
    <div class="t-align-sm-l t-align-c mb-50">
      <div class="heading-4 bold">
        {{ featuredTag ? featuredTag.name : 'Courses' }}
      </div>
    </div>

    <div>
      <div class="row justify-content-center h-100">
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
  },
  computed: {
    sortedCourses() {
      return this.featuredTag.tag.courses.sort(
        (a, b) => a.runs[0].price - b.runs[0].price
      )
    },
    collapsedCourses() {
      return this.featuredTag ? this.sortedCourses.slice(0, 3) : this.courses
    },
  },
}
</script>
