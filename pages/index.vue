<template>
    <div class="landing-page">
      <WelcomeSection />

      <CoursesSection />

      <PracticeAndHireSection />

      <div class="landing-page__section">
        <div class="width-limiter">
          <div
            class="row no-gutters justify-content-between align-items-center"
          >
            <div class="flex-1 t-align-lg-l t-align-c">
              <div class="heading-font stroke-font">ALUMNI NETWORK.</div>
              <div class="heading-font">ALUMNI NETWORK.</div>
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_news.svg"
              />
            </div>
          </div>
          <div class="mt-50 row no-gutters justify-content-center">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/company_logos.svg"
              class="w-100"
            />
          </div>
        </div>
      </div>

      <SuccessStoriesSection />

      <MentorSection />

      <CollegesAndCompaniesSection />

      <BlogsSection />

      <NewsSection />

  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import WelcomeSection from '@/components/home/WelcomeSection.vue'
import CoursesSection from '@/components/home/CoursesSection.vue'
import PracticeAndHireSection from '@/components/home/PracticeAndHireSection.vue'
import MentorSection from '@/components/home/MentorSection.vue'
import CollegesAndCompaniesSection from '@/components/home/CollegesAndCompaniesSection.vue'
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection.vue'
import BlogsSection from '@/components/home/BlogsSection.vue'
import NewsSection from '@/components/home/NewsSection.vue'
import Footer from '@/components/Footer.vue'
import ModalForm from '@/components/misc/ModalForm.vue'

export default {
  components: {
    Navigation,
    WelcomeSection,
    CoursesSection,
    PracticeAndHireSection,
    MentorSection,
    CollegesAndCompaniesSection,
    SuccessStoriesSection,
    BlogsSection,
    NewsSection,
    Footer,
    ModalForm,
  },
  mounted() {
    const getStartedButtons = document.querySelectorAll('.get-started-button')
    const coursesSection = document.querySelector('#course-section')

    getStartedButtons.forEach((button) => {
      button.addEventListener('click', () => {
        coursesSection.scrollIntoView({ behavior: 'smooth' })
      })
    })
  },
}
</script>
