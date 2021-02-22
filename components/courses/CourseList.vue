<template>
  <div>
    <div class="t-align-sm-l t-align-c mb-50">
      <div class="heading-4 bold">
        <!-- Trending -->
        {{ title }}
      </div>
      <div class="mt-10 text-grey font-4">
        <!-- Learn and grow as a developer with our project based courses. -->
        {{ subtitle }}
      </div>
    </div>

    <div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-5 col-sm-6 mb-50">
          <CourseCard theme="theme-pink" />
        </div>

        <div class="col-lg-4 col-md-5 col-sm-6 mb-50">
          <CourseCard theme="theme-green" />
        </div>

        <div class="col-lg-4 col-md-5 col-sm-6 mb-50">
          <CourseCard theme="theme-blue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from "@/components/courses/CourseCard.vue";

export default {
  props: ["title", "subtitle"],
};
</script>
