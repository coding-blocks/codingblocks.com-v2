<template>
  <div
    class="col-12 course-section__cards pt-lg-60 pt-30 h-100 flex-col justify-content-xl-between"
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
    <div v-if="collapsedCourses.length !== 0" class="w-100">
      <div class="row justify-content-center">
        <div
          v-for="course in collapsedCourses"
          :key="course.id"
          class="col-md-6 col-sm-8 col-12 mb-30"
        >
          <div v-if="courseType == 'online'">
            <a
              :href="`https://online.codingblocks.com/courses/${course.slug}`"
              target="_blank"
            >
              <OnlineCourseCardSmall :course="course" />
            </a>
          </div>
          <div v-else>
            <NuxtLink
              :to="{
                path: `/courses/${course.slug}`,
                query: {
                  batch: `${courseType}`,
                },
              }"
            >
              <CourseCardSmall :course="course" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="t-align-c">
        <NuxtLink
          class="button-tertiary"
          :to="{ path: '/courses', query: { type: `${courseType}` } }"
        >
          Explore All {{ courseType }} Courses
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </NuxtLink>
      </div>
    </div>
    <div v-else class="w-100 h-100">
      <div class="all-center h-100">
        <div class="t-align-c">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses-vector.svg"
            class="w-50"
          />
          <div class="text-gradient-orange heading-5 bold">
            New Batches will be announced soon!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCardSmall from '@/components/courses/CourseCardSmall.vue'
import OnlineCourseCardSmall from '@/components/courses/OnlineCourseCardSmall.vue'

export default {
  components: {
    CourseCardSmall,
    OnlineCourseCardSmall,
  },
  props: ['courseType'],
  data() {
    return {
      featuredTags: [],
      courses: [],
    }
  },
  computed: {
    sortedCourses() {
      return this.featuredTags.map(
        (featuredTag) =>
          featuredTag.tag.courses.sort(
            (a, b) => a.runs[0].price - b.runs[0].price
          )[0]
      )
    },
    collapsedCourses() {
      return this.courseType == 'online'
        ? this.sortedCourses.slice(0, 4)
        : this.courses.slice(0, 4)
    },
  },
  async fetch() {
    if (this.courseType == 'online')
      this.featuredTags = await this.$repositories.courses.fetchOnlineFeaturedCourses()
    else if (this.courseType == 'live')
      this.courses = await this.$repositories.courses.fetchLiveCourses()
    else this.courses = await this.$repositories.courses.fetchClassroomCourses()
  },
}
</script>
