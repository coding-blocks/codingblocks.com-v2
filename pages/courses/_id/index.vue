<template>
  <div class="a-cbm" style="margin-top: -70px">
    <Navigation />
    <div class="landing-page">
      <CourseDescriptionSection />

      <div class="landing-page__section">
        <div class="width-limiter">
          <div class="t-align-sm-l t-align-c">
            <div class="heading-4 bold mb-10">Course Insights</div>
            <div class="font-4 text-grey">
              Learn and grow as a developer with our project based courses.
            </div>
          </div>
          <div class="row mt-50">
            <div class="col-lg-8 col-md-7 mb-md-none mb-50">
              <CourseSyllabus />

              <CourseProjects />

              <CourseHighlights />
            </div>

            <div class="col-lg-4 col-md-5">
              <CourseBatch />
            </div>
          </div>
        </div>
      </div>

      <CoursePageMentorsSection />

      <div class="landing-page__section">
        <div class="width-limiter">
          <div class="heading-4 bold">Learning Tracks</div>
          <div class="my-40 row no-gutters align-items-center">
            <div class="br-5 p-10 bg-gradient-pink all-center s-80x80">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/js_white.svg"
              />
            </div>
            <div class="flex-1 pl-md-40 pl-20">
              <div class="heading-5 mb-10 bold">
                Try our Full Stack Web Development Track
              </div>
              <div class="font-4 text-grey">
                Learn full-stack web development using JavaScript &amp; NodeJS
              </div>
            </div>
          </div>
          <button class="button-primary">Explore</button>
        </div>
      </div>

      <div class="landing-page__section">
        <div class="width-limiter">
          <div class="t-align-sm-l t-align-c">
            <div class="heading-4 bold mb-10">Testimonials</div>
            <div class="font-4 text-grey">
              Learn and grow as a developer with our project based courses.
            </div>
          </div>
          <div class="row mt-50">
            <div class="col-lg-4 col-md-5 col-sm-6 mb-25 h-inherit">
              <div class="card card--equal-height">
                <div class="card__header card__header--border-highlight">
                  <div class="flex-1">
                    <div class="s-80x80 round">
                      <img
                        src="https://minio.codingblocks.com/amoeba/arnva-min.webp"
                      />
                    </div>
                  </div>
                  <div class="t-align-r">
                    <div class="font-2 text-grey bold mb-10">Placed at</div>
                    <img
                      src="https://minio.codingblocks.com/amoeba/amazon.svg"
                      style="height: 40px"
                    />
                  </div>
                </div>
                <div>
                  <div class="heading-5 bold mb-1">Arnav Gupta</div>
                  <div class="font-3 text-grey mb-20">
                    Delhi Tech University
                  </div>
                  <div class="font-4">
                    Coding Blocks was founded in 2014 with a mission to create
                    skilled software engineers for our country and the world. We
                    aim to bridge the gap between the quality of skills demanded
                    by industry and the quality of skills. Read more...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import CourseDescriptionSection from '@/components/courses/CourseDescriptionSection.vue'
import CourseSyllabus from '@/components/courses/CourseSyllabus.vue'
import CourseProjects from '@/components/courses/CourseProjects.vue'
import CourseBatch from '@/components/courses/CourseBatch.vue'
import CourseHighlights from '@/components/courses/CourseHighlights.vue'
import CoursePageMentorsSection from '@/components/courses/CoursePageMentorsSection.vue'

export default {
  components: {
    CourseDescriptionSection,
    CourseSyllabus,
    CourseProjects,
    CourseBatch,
    CourseHighlights,
    CoursePageMentorsSection,
  },
}
</script>
