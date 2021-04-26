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

            <div class="heading-font stroke-font">LIVE</div>
            <div class="heading-font">COURSES</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_blog.svg"
            />
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses-vector.svg"
              class="d-lg-none d-block mt-50 mx-auto"
            />
          </div>
          <div class="col-6 d-lg-block d-none t-align-r">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses-vector.svg"
            />
          </div>
        </div>

        <HelpSection :hide_main_section="true" />

        <div class="mt-lg-75 mt-sm-50 mt-30">
          <CourseList type="live" :courses="coursesPayload" />
        </div>
      </div>
    </div>

    <SuccessStoriesSection class="bg-white pt-none" />
  </div>
</template>

<script>
import CourseList from '@/components/courses/CourseList.vue'
import HelpSection from '@/components/courses/HelpSection'
import CourseBySubjectSection from '@/components/courses/CourseBySubjectSection.vue'
import TracksSection from '@/components/courses/TracksSection.vue'
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection.vue'

export default {
  components: {
    CourseList,
    HelpSection,
    CourseBySubjectSection,
    TracksSection,
    SuccessStoriesSection,
  },
  data() {
    return {
      coursesPayload: [],
      miniBanner: null,
    }
  },

  async fetch() {
    try {
      this.miniBanner = await this.$repositories.home.miniBanner()
    } catch (err) {
    } finally {
      this.coursesPayload = await this.$repositories.courses.fetchLiveCourses()
    }
  },
}
</script>
