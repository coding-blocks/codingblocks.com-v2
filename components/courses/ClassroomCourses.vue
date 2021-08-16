<template>
  <div class="landing-page">
    <div class="landing-page__section">
      <div class="width-limiter">
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="flex-1 pr-lg-20 t-align-lg-l t-align-c">
            <!-- Banner for smaller screens -->
            <div
              v-if="miniBanner"
              class="mini-banner position-relative br-5 mb-30 mx-auto d-lg-none d-block"
              style="width: fit-content"
            >
              <!-- Just convert this to :href once added from backend -->
              <a :href="miniBanner.cta">
                <div class="bg-purple br-5 all-center mt-30">
                  <img :src="miniBanner.img_url" class="br-5" />
                </div>
                <div class="mini-banner__tag">
                  <div class="font-2">{{ miniBanner.tag }}</div>
                </div>
              </a>
            </div>

            <!-- Banner for bigger screens -->
            <div
              v-if="miniBanner"
              class="mini-banner position-relative br-5 mb-30 d-lg-block d-none"
              style="width: fit-content"
            >
              <a :href="miniBanner.cta">
                <div class="bg-purple br-5 all-center mt-30">
                  <img :src="miniBanner.img_url" class="br-5" />
                </div>
                <div class="mini-banner__tag">
                  <div class="font-2">{{ miniBanner.tag }}</div>
                </div>
              </a>
            </div>

            <div class="heading-font stroke-font">CLASSROOM</div>
            <div class="heading-font">COURSES</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_news.svg"
            />
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses-updated-vector.svg"
              class="d-lg-none d-block mt-50 mx-auto"
            />
          </div>
          <div class="col-6 d-lg-block d-none t-align-r">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses-updated-vector.svg"
            />
          </div>
        </div>

        <HelpSection :hide_main_section="true" />

        <div class="mt-lg-75 mt-sm-50 mt-30">
          <button
            class="button-secondary mb-sm-50 mb-30"
            id="center-selector"
            v-on:click="updateCenterCounter()"
            @click="$fetch"
          >
            {{ selectedCenter.toUpperCase() }}
          </button>

          <CourseList type="classroom" :courses="coursesPayload" />
        </div>
      </div>
    </div>

    <SuccessStoriesSection class=" pt-none" />
  </div>
</template>

<script>
import CourseList from '@/components/courses/CourseList.vue'
import HelpSection from '@/components/courses/HelpSection'
import CourseBySubjectSection from '@/components/courses/CourseBySubjectSection.vue'
import TracksSection from '@/components/courses/TracksSection.vue'
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection.vue'

export default {
  data() {
    return {
      coursesPayload: [],
      miniBanner: null,
      centersArray: ['all', 'pitampura', 'noida'],
      centerCounter: 0,
    }
  },
  components: {
    CourseList,
    HelpSection,
    CourseBySubjectSection,
    TracksSection,
    SuccessStoriesSection,
    HelpSection,
  },
  async fetch() {
    try {
      this.miniBanner = await this.$repositories.home.miniBanner()
    } catch (err) {
    } finally {
      this.coursesPayload = await this.$repositories.courses.fetchClassroomCourses(
        this.centerQuery
      )
    }
  },
  computed: {
    selectedCenter() {
      return this.centersArray[this.centerCounter]
    },
    centerQuery() {
      return this.selectedCenter == 'all'
        ? 'pitampura,noida'
        : this.selectedCenter == 'pitampura'
        ? 'pitampura'
        : 'noida'
    },
  },
  methods: {
    updateCenterCounter() {
      if (this.centerCounter === this.centersArray.length - 1)
        this.centerCounter = 0
      else this.centerCounter++
    },
  },
}
</script>
