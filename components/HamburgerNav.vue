<template>
  <div
    class="hamburger-nav border-left"
    :class="show ? '' : 'hamburger-nav--hidden'"
    id="hamburger-nav"
  >
    <div
      class="row no-gutters justify-content-end align-items-center border-bottom position-sticky tl bg-white z-pos"
      style="height: 89px"
    >
      <img
        src="https://minio.codingblocks.com/amoeba/wrong-close.png"
        alt="#"
        class="mr-4 hamburger-nav__cross pointer"
        id="hamburger-close"
        @click="$emit('closeHamburger')"
      />
    </div>
    <div>
      <LoginButton :hamburgerMenu="true" @click="$emit('closeHamburger')" />
      <div class="px-40" @click="$emit('closeHamburger')">
        <a href="https://online.codingblocks.com" target="_blank">
          <div class="mb-15 hamburger-nav__menu-element">
            <div style="width: 50px">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-learn.svg"
              />
            </div>
            <div class="font-5 ml-15">Learn</div>
          </div>
        </a>
        <a href="https://hack.codingblocks.com" target="_blank">
          <div class="mb-15 hamburger-nav__menu-element">
            <div style="width: 50px">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-practice.svg"
              />
            </div>
            <div class="font-5 ml-15">Practice</div>
          </div>
        </a>
        <a href="https://hire.codingblocks.com" target="_blank">
          <div class="mb-15 hamburger-nav__menu-element">
            <div style="width: 50px">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-hire.svg"
              />
            </div>
            <div class="font-5 ml-15">Get Hired</div>
          </div>
        </a>
        <a href="https://ide.codingblocks.com" target="_blank">
          <div class="mb-15 hamburger-nav__menu-element">
            <div style="width: 50px">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/navbar-ide.svg"
              />
            </div>
            <div class="font-5 ml-15">IDE</div>
          </div>
        </a>
      </div>
      <div class="hamburger-nav__accordion-menu-element">
        <input type="checkbox" id="check1" />
        <label
          class="hamburger-nav__accordion-menu-element__header"
          for="check1"
        >
          <div class="flex-1 pr-20 font-5">Courses</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/accordion-open-grey.svg"
          />
        </label>
        <div
          class="hamburger-nav__accordion-menu-element__content"
          @click="$emit('closeHamburger')"
        >
          <div class="mb-50">
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
                  href="https://online.codingblocks.com/courses/c-plus-plus-online-course-for-beginners"
                  target="_blank"
                >
                  C++ Master Course
                </a>
                <div
                  class="bg-gradient-yellow white font-1 p-1 d-inline-block"
                  style="border-radius: 2px"
                >
                  NEW
                </div>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  href="https://online.codingblocks.com/courses/complete-java-course-online"
                  target="_blank"
                >
                  JAVA Master Course
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  href="https://online.codingblocks.com/courses/python-for-beginners-developers"
                  target="_blank"
                >
                  Python for Developers
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  href="https://online.codingblocks.com/courses/python-django"
                  target="_blank"
                >
                  Web Dev with Python - Django
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  href="https://online.codingblocks.com/courses/competitive-programming-course-online"
                  target="_blank"
                >
                  Competitive Programming
                </a>
              </div>
              <div class="mb-20 row no-gutters align-items-center">
                <a
                  class="font-4 bold pointer"
                  href="https://online.codingblocks.com/courses/data-science-online-course-python"
                  target="_blank"
                >
                  Data Science
                </a>
              </div>
            </div>
            <NuxtLink
              class="button-tertiary mt-15"
              :to="{ path: '/courses', query: { type: 'online' } }"
            >
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </NuxtLink>
          </div>
          <div class="mb-50">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses.svg"
              style="height: 40px"
            />
            <div class="font-3 bold mt-15 text-grey-light-1">
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
              <div class="font-4 bold text-gradient-orange">
                Releasing dates for new Classroom Courses soon! <br />
                STAY TUNED!
              </div>
            </div>
            <NuxtLink
              class="button-tertiary mt-15"
              :to="{ path: '/courses', query: { type: 'classroom' } }"
            >
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </NuxtLink>
          </div>
          <div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses.svg"
              style="height: 40px"
            />
            <div class="font-3 bold mt-15 text-grey-light-1">LIVE COURSES</div>
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
              <div class="font-4 bold text-gradient-orange">
                Releasing dates for new Live Courses soon! <br />
                STAY TUNED!
              </div>
            </div>
            <NuxtLink
              class="button-tertiary mt-15"
              :to="{ path: '/courses', query: { type: 'live' } }"
            >
              Explore All
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </NuxtLink>
          </div>
          <!-- <div>
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
      <div
        class="hamburger-nav__accordion-menu-element"
        @click="$emit('closeHamburger')"
      >
        <NuxtLink to="/events">
          <input type="checkbox" id="check2" />
          <label
            class="hamburger-nav__accordion-menu-element__header"
            for="check2"
          >
            <div class="flex-1 pr-20 font-5">Events</div>
            <!-- <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/accordion-open-grey.svg"
          /> -->
          </label>
        </NuxtLink>
      </div>
      <a
        href="https://blog.codingblocks.com/"
        target="_blank"
        @click="$emit('closeHamburger')"
      >
        <div class="hamburger-nav__accordion-menu-element">
          <input type="checkbox" id="check3" />
          <label
            class="hamburger-nav__accordion-menu-element__header"
            for="check3"
          >
            <div class="flex-1 pr-20 font-5">Blog</div>
            <!-- <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/accordion-open-grey.svg"
          /> -->
          </label>
        </div>
      </a>
      <a
        href="https://superhero.codingblocks.com/"
        target="_blank"
        @click="$emit('closeHamburger')"
      >
        <div class="hamburger-nav__accordion-menu-element">
          <input type="checkbox" id="check4" />
          <label
            class="hamburger-nav__accordion-menu-element__header"
            for="check4"
          >
            <div class="flex-1 pr-20 font-5">Campus Superheros</div>
          </label>
        </div>
      </a>
      <div
        class="hamburger-nav__accordion-menu-element"
        @click="$emit('closeHamburger')"
      >
        <NuxtLink to="/company">
          <input type="checkbox" id="check5" />
          <label
            class="hamburger-nav__accordion-menu-element__header"
            for="check5"
          >
            <div class="flex-1 pr-20 font-5">Contact</div>
          </label>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue'

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    LoginButton,
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
