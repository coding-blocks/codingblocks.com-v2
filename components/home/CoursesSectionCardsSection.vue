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
    <div class="w-100">
      <div class="row justify-content-center">
        <div class="col-md-6 col-sm-8 col-12 mb-30">
          <CourseCardSmall />
        </div>
        <div class="col-md-6 col-sm-8 col-12 mb-30">
          <CourseCardSmall />
        </div>
        <div class="col-md-6 col-sm-8 col-12 mb-30">
          <CourseCardSmall />
        </div>
        <div class="col-md-6 col-sm-8 col-12 mb-30">
          <CourseCardSmall />
        </div>
      </div>
      <div class="t-align-c">

        <NuxtLink class="button-tertiary" to="/courses">
          Explore All {{courseType}} Courses
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
import CourseCardSmall from "@/components/courses/CourseCardSmall.vue";
export default {
  components: {
    CourseCardSmall
  },
  props: ["courseType"],
};
</script>
