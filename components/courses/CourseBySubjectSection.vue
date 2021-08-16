<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="t-align-sm-l t-align-c">
        <div class="heading-4 bold">Courses based on subjects</div>
        <div class="mt-2 ">
          Learn and grow as a developer with our project based courses.
        </div>
      </div>
      <div class="mt-50">
        <div
          class="row no-gutters justify-content-sm-start justify-content-center"
        >
          <div class="mb-25">
            <div
              class="br-5 bg-gradient-blue-light p-15 all-center subject-course-button"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cpp_white.svg"
              />
            </div>
            <div
              class="mt-15 font-2 t-align-c mr-sm-25 mr-15 ml-sm-none ml-15 bold"
            >
              C++
            </div>
          </div>
          <div class="mb-25">
            <div
              class="br-5 bg-gradient-pink p-15 all-center subject-course-button"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/js_white.svg"
              />
            </div>
            <div
              class="mt-15 font-2 t-align-c mr-sm-25 mr-15 ml-sm-none ml-15 bold"
            >
              Web Dev
            </div>
          </div>
          <div class="mb-25">
            <div
              class="br-5 bg-gradient-green-light p-15 all-center subject-course-button"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python_white.svg"
              />
            </div>
            <div
              class="mt-15 font-2 t-align-c mr-sm-25 mr-15 ml-sm-none ml-15 bold"
            >
              Python
            </div>
          </div>
          <div class="mb-25">
            <div
              class="br-5 bg-gradient-purple p-15 all-center subject-course-button"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/android_white.png"
              />
            </div>
            <div
              class="mt-15 font-2 t-align-c mr-sm-25 mr-15 ml-sm-none ml-15 bold"
            >
              App<br />Development
            </div>
          </div>
          <div class="mb-25">
            <div
              class="br-5 bg-gradient-orange-light p-15 all-center subject-course-button"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/java_white.svg"
              />
            </div>
            <div
              class="mt-15 font-2 t-align-c mr-sm-25 mr-15 ml-sm-none ml-15 bold"
            >
              Java
            </div>
          </div>
          <div class="mb-25">
            <div
              class="br-5 bg-gradient-pink p-15 all-center subject-course-button"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/ai_white.svg"
              />
            </div>
            <div
              class="mt-15 font-2 t-align-c mr-sm-25 mr-15 ml-sm-none ml-15 bold"
            >
              Machine<br />Learning
            </div>
          </div>
          <div class="mb-25">
            <div
              class="br-5 bg-gradient-purple p-15 all-center subject-course-button"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/competitive_white.svg"
              />
            </div>
            <div
              class="mt-15 font-2 t-align-c mr-sm-25 mr-15 ml-sm-none ml-15 bold"
            >
              Competitive<br />Programming
            </div>
          </div>
        </div>
      </div>

    
    </div>
  </div>
</template>

<script>
import CourseList from "@/components/courses/CourseList.vue";

export default {
  components: {
    CourseList,
  },
};
</script>
