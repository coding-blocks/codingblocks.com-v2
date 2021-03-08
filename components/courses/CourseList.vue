<template>
  <div>
    <div class="t-align-sm-l t-align-c mb-50">
      <div class="heading-4 bold">
        {{ featuredTag ? featuredTag.name : 'Live Courses' }}
      </div>
    </div>

    <div>
      <div class="row justify-content-center">
        <div
          v-for="course in collapsedCourses"
          :key="course.id"
          class="col-lg-4 col-md-5 col-sm-6 mb-50"
        >
          <div v-if="type == 'online'">
            <OnlineCourseCard :course="course" />
          </div>
          <div v-else>
            <CourseCard :course="course" />
          </div>
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
