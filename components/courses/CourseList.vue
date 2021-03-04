<template>
  <div>
    <div class="t-align-sm-l t-align-c mb-50">
      <div class="heading-4 bold">
        {{ featuredTag.name }}
      </div>
    </div>

    <div>
      <div class="row justify-content-center">
        <div
          v-for="course in collapsedCourses"
          :key="course.id"
          class="col-lg-4 col-md-5 col-sm-6 mb-50"
        >
          <CourseCard :course="course" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '@/components/courses/CourseCard.vue'

export default {
  components: {
    CourseCard,
  },
  props: {
    featuredTag: {
      type: Object,
    },
  },
  computed: {
    sortedCourses() {
      return this.featuredTag.tag.courses.sort(
        (a, b) => a.runs[0].price - b.runs[0].price
      )
    },
    collapsedCourses() {
      return this.sortedCourses.slice(0, 3)
    },
    expandedCourses() {
      return this.sortedCourses.slice(3)
    },
  },
}
</script>
