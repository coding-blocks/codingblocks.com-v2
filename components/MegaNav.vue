<template>
  <transition name="slide-side">
    <div v-if="show" class="py-50 border-bottom px-25 bg-white" id="mega-nav">
      <div class="width-limiter">
        <div class="row" @click="$emit('close')">
          <div class="col-4">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/online-courses.svg"
              style="height: 40px"
            />
            <div class="font-3 bold mt-15 ">
              ONLINE COURSES
            </div>
            <div class="mt-35 mb-15">
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer mr-20"
                  target="_blank"
                  href="https://online.codingblocks.com/courses/c-plus-plus-online-course-for-beginners"
                >
                  C++ Master Course
                </a>
                <!-- <div
                  class="bg-gradient-yellow white font-1 p-1 d-inline-block"
                  style="border-radius: 2px"
                >
                  NEW
                </div> -->
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  target="_blank"
                  href="https://online.codingblocks.com/courses/complete-java-course-online"
                >
                  JAVA Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  target="_blank"
                  href="https://online.codingblocks.com/courses/python-for-beginners-developers"
                >
                  Python for Developers
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  target="_blank"
                  href="https://online.codingblocks.com/courses/python-django"
                >
                  Web Dev with Python - Django
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  target="_blank"
                  href="https://online.codingblocks.com/courses/data-science-online-course-python"
                >
                  Data Science
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  target="_blank"
                  href="https://online.codingblocks.com/courses/competitive-programming-course-online"
                >
                  Competitive Programming
                </a>
              </div>
            </div>
            <NuxtLink
              class="button-tertiary"
              :to="{ path: '/courses', query: { type: 'online' } }"
            >
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </NuxtLink>
          </div>
          <div class="col-4">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses.svg"
              style="height: 40px"
            />
            <div class="font-3 bold mt-15 ">
              CLASSROOM COURSES
            </div>
            <div
              v-if="classroomCoursesPayload.length !== 0"
              class="mt-35 mb-15"
            >
              <div
                class="mb-20 row no-gutters align-items-center"
                v-for="(course, index) in classroomCoursesPayload"
                :key="index"
              >
                <NuxtLink
                  class="font-4 bold pointer"
                  :to="`/courses/${course.slug}`"
                >
                  {{ course.title }}
                </NuxtLink>
              </div>
            </div>
            <div v-else class="my-35">
              <div class="font-3 bold text-gradient-orange">
                Releasing dates for new Classroom Courses soon! <br />
                STAY TUNED!
              </div>
            </div>
            <NuxtLink
              class="button-tertiary"
              :to="{ path: '/courses', query: { type: 'classroom' } }"
            >
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </NuxtLink>
          </div>
          <div class="col-4">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses.svg"
              style="height: 40px"
            />
            <div class="font-3 bold mt-15 ">LIVE COURSES</div>
            <div v-if="liveCoursesPayload.length !== 0" class="mt-35 mb-15">
              <div
                class="mb-20 row no-gutters align-items-center"
                v-for="(course, index) in liveCoursesPayload"
                :key="index"
              >
                <NuxtLink
                  class="font-4 bold pointer"
                  :to="`/courses/${course.slug}`"
                >
                  {{ course.title }}
                </NuxtLink>
              </div>
            </div>
            <div v-else class="my-35">
              <div class="font-3 bold text-gradient-orange">
                Releasing dates for new Live Courses soon! <br />
                STAY TUNED!
              </div>
            </div>
            <NuxtLink
              class="button-tertiary"
              :to="{ path: '/courses', query: { type: 'live' } }"
            >
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </NuxtLink>
          </div>
          <!-- <div class="col-3">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses.svg"
              style="height: 40px"
            />
            <div class="row no-gutters align-items-center mt-15">
              <div class="font-3 bold  mr-20">
                INDUSTRIAL TRAINING
              </div>
              <div
                class="bg-gradient-yellow white font-1 p-1 d-inline-block"
                style="border-radius: 2px"
              >
                NEW
              </div>
            </div>
            <div class="mt-35 mb-15">
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#"> C++ Master Course </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#"> JAVA Master Course </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a class="font-4 bold pointer" href="#">
                  Python for Developers
                </a>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      classroomCoursesPayload: [],
      liveCoursesPayload: [],
    }
  },
  async fetch() {
    this.classroomCoursesPayload = await this.$repositories.courses.fetchClassroomCourses()
    this.liveCoursesPayload = await this.$repositories.courses.fetchLiveCourses()
  },
}
</script>
