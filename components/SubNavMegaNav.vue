<template>
  <div>
    <!-- Sub Nav -->
    <div class="py-15 border-bottom px-25 d-md-block d-none">
      <div class="width-limiter">
        <div class="row no-gutters justify-content-end">
          <div
            class="row no-gutters align-items-center mr-30 font-4 text-grey pointer"
            id="mega-nav-toggle"
          >
            <span>Courses</span>
            <img
              src="https://minio.cb.lk/public/fa-5.13/svgs/solid/chevron-down.svg"
              class="ml-10"
              style="height: 15px"
            />
          </div>
          <!-- <div
            class="row no-gutters align-items-center mr-30 font-4 text-grey pointer"
          >
            <div>Events</div>
            <NuxtLink to="/events"> Events </NuxtLink>
          </div> -->
          <div
            class="row no-gutters align-items-center mr-30 font-4 text-grey pointer"
          >
            <a href="https://blog.codingblocks.com/" target="_blank">Blogs</a>
          </div>
          <div
            class="row no-gutters align-items-center mr-30 font-4 text-grey pointer"
          >
            <a href="https://superhero.codingblocks.com/" target="_blank"
              >Campus Superheroes</a
            >
          </div>
          <div
            class="row no-gutters align-items-center font-4 text-grey pointer"
          >
            <NuxtLink to="/company"> Contact </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Mega Nav -->
    <div class="py-50 border-bottom px-25 d-none bg-white" id="mega-nav">
      <div class="width-limiter">
        <div class="row">
          <div class="col-4">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/online-courses.svg"
              style="height: 40px"
            />
            <div class="font-3 bold mt-15 text-grey-light-1">
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
            <div class="font-3 bold mt-15 text-grey-light-1">
              CLASSROOM COURSES
            </div>
            <div class="mt-35 mb-15">
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
            <div class="font-3 bold mt-15 text-grey-light-1">LIVE COURSES</div>
            <div class="mt-35 mb-15">
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
              <div class="font-3 bold text-grey-light-1 mr-20">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      classroomCoursesPayload: [],
      liveCoursesPayload: [],
    }
  },
  mounted() {
    document.querySelector('#mega-nav-toggle').addEventListener('click', () => {
      const meganav = document.querySelector('#mega-nav')

      if (meganav.classList.contains('d-none')) {
        meganav.classList.remove('d-none')
      } else {
        meganav.classList.add('d-none')
      }
    })
  },
  async fetch() {
    this.classroomCoursesPayload = await this.$repositories.courses.fetchClassroomCourses()
    this.liveCoursesPayload = await this.$repositories.courses.fetchLiveCourses()
  },
}
</script>
