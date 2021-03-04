<template>
  <div
    class="col-12 course-section__cards pt-lg-60 pt-30 h-100 flex-col justify-content-between"
    :id="courseType"
  >
    <div class="w-100">
      <div class="heading-4 bold">
        Learn to code professionally in the industry!
      </div>
      <div class="heading-6 text-blue mb-40 mt-2">
        Discover our most loved courses!
      </div>
    </div>
    <div v-if="collapsedCourses" class="w-100">
      <div class="row justify-content-center">
        <div
          v-for="course in collapsedCourses"
          :key="course.id"
          class="col-md-6 col-sm-8 col-12 mb-30"
        >
          <CourseCardSmall :course="course" />
        </div>
      </div>
      <div class="t-align-c">
        <NuxtLink class="button-tertiary" to="/courses">
          Explore All {{ courseType }} Courses
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCardSmall from '@/components/courses/CourseCardSmall.vue'
export default {
  components: {
    CourseCardSmall,
  },
  props: ['courseType'],
  data() {
    return {
      featuredTagsPayload: {},
    }
  },
  computed: {
    featuredTags() {
      // somehow calling this server side fails; need to debug why
      return process.client
        ? this.$jsonApiStore
            .sync(this.featuredTagsPayload)
            .sort((a, b) => a.order - b.order)
        : []
    },
    sortedCourses() {
      return this.featuredTags.map(
        (featuredTag) =>
          featuredTag.tag.courses.sort(
            (a, b) => a.runs[0].price - b.runs[0].price
          )[0]
      )
    },
    collapsedCourses() {
      return this.sortedCourses.slice(0, 4)
    },
  },
  async fetch() {
    this.featuredTagsPayload = await this.$repositories.courses.fetchFeaturedCourses()
  },
}
</script>
