<template>
  <div
    class="landing-page__section landing-page__section--footer bg-grey-light-3"
    style="border-top: 1px solid #cccccc"
  >
    <div class="width-limiter">
      <div
        class="row no-gutters pb-50 mb-50"
        style="border-bottom: 1px solid #cccccc"
      >
        <div
          class="col-lg-9 col-12 pr-lg-20 pb-lg-none pb-50 landing-page__section--footer__main-section"
        >
          <div class="row no-gutters">
            <div class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20">
              <div class="flex-col justify-content-start h-100">
                <div class="font-4 bold w-100">PRODUCTS</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.codingblocks.cbonlineapp&hl=en_IN&gl=US"
                      class="font-4"
                    >
                      Android App
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="https://online.codingblocks.com/" class="font-4">
                      Online Coding Blocks
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="https://hack.codingblocks.com/" class="font-4">
                      Hacker Blocks
                    </a>
                  </div>
                  <div class="mb-30">
                    <a
                      href="https://hire.codingblocks.com/applicants"
                      class="font-4"
                    >
                      Hiring Blocks
                    </a>
                  </div>
                  <div>
                    <a href="https://ide.codingblocks.com/" class="font-4">
                      Online IDE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20">
              <div class="flex-col justify-content-start h-100">
                <div class="font-4 bold w-100">COMPANY</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <NuxtLink to="/company" class="font-4">About Us</NuxtLink>
                  </div>
                  <div class="mb-30">
                    <NuxtLink to="/company" class="font-4">
                      Meet the Team
                    </NuxtLink>
                  </div>
                  <div class="mb-30">
                    <NuxtLink to="/testimonials" class="font-4">
                      Success Stories
                    </NuxtLink>
                  </div>
                  <!-- <div class="mb-30">
                    <a href="#" class="font-4">Become a TA/Mentor</a>
                  </div> -->
                  <!-- <div>
                    <a href="https://blog.codingblocks.com/" class="font-4">
                      Blog
                    </a>
                  </div> -->
                </div>
              </div>
            </div>
            <div
              class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20 mt-sm-none mt-50"
            >
              <div class="flex-col justify-content-start h-100">
                <div class="font-4 bold w-100">RESOURCES</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <a
                      href="https://www.youtube.com/channel/UCICWIYEx2mo4wYZzLwJ7wVw"
                      class="font-4"
                    >
                      Watch Youtube Videos
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="https://blog.codingblocks.com/" class="font-4">
                      Blogs
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="https://t.me/CodingBlocksIN" class="font-4">
                      Telegram Channel
                    </a>
                  </div>
                  <div class="mb-30">
                    <a href="#" class="font-4">Study Material</a>
                  </div>
                  <div>
                    <a href="#" class="font-4" v-on:click="setShowModal(true)">
                      Career Advice
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-sm-3 col-6 h-inherit pr-xl-50 pr-lg-30 pr-20 mt-sm-none mt-50"
            >
              <div class="flex-col justify-content-start h-100">
                <div class="font-4 bold w-100">COMMUNITY</div>
                <div class="w-100 mt-50">
                  <div class="mb-30">
                    <a
                      href="https://superhero.codingblocks.com/"
                      class="font-4"
                    >
                      Campus Ambassador
                    </a>
                  </div>
                  <div class="mb-30">
                    <NuxtLink to="/events" class="font-4">
                      Events and Workshops
                    </NuxtLink>
                  </div>
                  <div class="mb-30">
                    <a
                      href="http://boss.codingblocks.com/"
                      target="_blank"
                      class="font-4"
                    >
                      BOSS 2020
                    </a>
                  </div>
                  <div>
                    <a href="https://ide.codingblocks.com/" class="font-4">
                      Online IDE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12 mt-lg-none mt-50 pl-xl-70 pl-lg-50">
          <div class="row no-gutters">
            <div class="col-lg-12 col-sm-6 col-12 mb-lg-50">
              <div class="bold font-4 mb-sm-40 mb-30">CONTACT</div>
              <div class="font-4 mb-lg-30 mb-sm-20 mb-15">
                <a href="mailto:admissions@codingblocks.com">
                  admissions@codingblocks.com
                </a>
              </div>
              <div class="font-4">
                <a href="tel:1800-274-4504">1800 274 4504</a>
              </div>
            </div>
            <div class="col-lg-12 col-sm-6 col-12 mt-sm-none mt-50">
              <div class="bold font-4 mb-sm-40 mb-30">TECHNICAL SUPPORT</div>
              <div class="font-4 mb-lg-30 mb-sm-20 mb-15">
                <a href="mailto:support@codingblocks.com">
                  support@codingblocks.com
                </a>
              </div>
              <div class="font-4">
                <a href="tel:964-333-9747">964 333 9747</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row pb-50" style="border-bottom: 1px solid #cccccc">
        <div class="col-4">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/online-courses.svg"
            style="height: 40px"
          />
          <div class="font-3 bold mt-15 text-grey-light-1">ONLINE COURSES</div>
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
          <div v-if="classroomCoursesPayload.length !== 0" class="mt-35 mb-15">
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
      </div>
      <div
        class="row no-gutters align-items-center justify-content-sm-between justify-content-center mt-50"
      >
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/cblogo-black.png"
          style="height: 90px"
        />
        <div
          class="flex-1 t-align-xl-c t-align-r pl-xl-none pl-20 d-sm-block d-none"
        >
          <div class="font-4 mb-10">
            <a href="/privacypolicy.html">Privacy Policy</a>
            |
            <a href="/tos.html">Terms of Service</a>
          </div>
          <div class="font-4">Copyright 2020 - Coding Blocks Pvt. Ltd.</div>
        </div>
        <div class="col-12 t-align-c d-sm-none d-block mt-50">
          <div class="font-4 mb-10">
            <a href="/privacypolicy.html">Privacy Policy</a>
            |
            <a href="/tos.html">Terms of Service</a>
          </div>
          <div class="font-4">Copyright 2020 - Coding Blocks Pvt. Ltd.</div>
        </div>
        <div
          class="row no-gutters align-items-center justify-content-end d-xl-flex d-none"
        >
          <a href="https://cb.lk/twon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/twitter-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/fbon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/facebook-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/inon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/instagram-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/lion">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/linkedin-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/yton">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/youtube-black.svg"
              class="mr-20"
            />
          </a>
          <a href="https://cb.lk/ghon">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/github-black.svg"
            />
          </a>
        </div>
      </div>
      <div
        class="row no-gutters align-items-center justify-content-center d-xl-none d-flex mt-50"
      >
        <a href="https://cb.lk/twon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/twitter-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/fbon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/facebook-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/inon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/instagram-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/lion">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/linkedin-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/yton">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/youtube-black.svg"
            class="mr-20"
          />
        </a>
        <a href="https://cb.lk/ghon">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/github-black.svg"
          />
        </a>
      </div>
    </div>
    <ModalForm v-if="showModal" @close="setShowModal(false)">
      <ConsultationForm />
    </ModalForm>
  </div>
</template>

<script>
import ModalForm from '@/components/misc/ModalForm.vue'
import ConsultationForm from '@/components/misc/ConsultationForm.vue'

export default {
  data() {
    return {
      showModal: false,
      classroomCoursesPayload: [],
      liveCoursesPayload: [],
    }
  },
  components: {
    ModalForm,
    ConsultationForm,
  },
  methods: {
    setShowModal(value) {
      this.showModal = value
    },
  },
  async fetch() {
    this.classroomCoursesPayload = await this.$repositories.courses.fetchClassroomCourses()
    this.liveCoursesPayload = await this.$repositories.courses.fetchLiveCourses()
  },
}
</script>

<style scoped>
fieldset {
  border: none !important;
  margin: 0 !important;
}
</style>
