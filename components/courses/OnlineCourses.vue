<template>
  <div class="landing-page">
    <div class="landing-page__section">
      <div class="width-limiter">
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="col-lg-6 t-align-lg-l t-align-c">
            <!-- Banner for smaller screens -->
            <div
              v-if="miniBanner"
              class="mini-banner position-relative br-5 mb-30 mx-auto d-lg-none d-block"
              style="width: fit-content"
            >
              <div class="bg-purple br-5 all-center mt-30">
                <img :src="miniBanner.img_url" class="br-5" />
              </div>
              <div class="mini-banner__tag">
                <div class="font-2">{{ miniBanner.tag }}</div>
              </div>
            </div>

            <!-- Banner for bigger screens -->
            <div
              v-if="miniBanner"
              class="mini-banner position-relative br-5 mb-30 d-lg-block d-none"
              style="width: fit-content"
            >
              <div class="bg-purple br-5 all-center mt-30">
                <img :src="miniBanner.img_url" class="br-5" />
              </div>
              <div class="mini-banner__tag">
                <div class="font-2">{{ miniBanner.tag }}</div>
              </div>
            </div>

            <div class="heading-font stroke-font">LEARN ANYTIME</div>
            <div class="heading-font">LEARN ANYWHERE</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_events.svg"
            />
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/light-theme-vector.svg"
              class="d-lg-none d-block mt-50 mx-auto"
            />
            <!-- <div
              class="mt-50 row no-gutters justify-content-lg-start justify-content-center"
            >
              <div class="card p-0" style="width: fit-content">
                <div
                  class="row no-gutters align-items-center justify-content-between py-15 px-30 pointer border-bottom"
                >
                  <div class="font-4 pr-100">Popular Courses</div>
                  <div class="font-4">&#x3009;</div>
                </div>
                <div
                  class="row no-gutters align-items-center justify-content-between py-15 px-30 pointer border-bottom"
                >
                  <div class="font-4 pr-100">Foundation Courses</div>
                  <div class="font-4">&#x3009;</div>
                </div>
                <div
                  class="row no-gutters align-items-center justify-content-between py-15 px-30 pointer"
                >
                  <div class="font-4 pr-100">Learning Tracks</div>
                  <div class="font-4">&#x3009;</div>
                </div>
              </div>
            </div> -->
          </div>
          <div class="col-6 d-lg-block d-none">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/light-theme-vector.svg"
            />
          </div>
        </div>

        <HelpSection />

        <div class="mt-sm-75 mt-50">
          <CourseList
            type="online"
            :featuredTag="featuredTag"
            v-for="featuredTag in featuredTags"
            :key="`feature_${featuredTag.id}`"
          />
        </div>
      </div>
    </div>
    <!-- <CourseBySubjectSection /> -->
    <TracksSection />

    <SuccessStoriesSection />

    <Footer />
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
      featuredTagsPayload: {},
      miniBanner: null,
    }
  },
  computed: {
    featuredTags() {
      return this.featuredTagsPayload.length
        ? this.featuredTagsPayload.sort((a, b) => a.order - b.order)
        : []
    },
  },
  async fetch() {
    this.miniBanner = await this.$repositories.home.miniBanner()
    this.featuredTagsPayload = await this.$repositories.courses.fetchOnlineFeaturedCourses()
  },
}
</script>
