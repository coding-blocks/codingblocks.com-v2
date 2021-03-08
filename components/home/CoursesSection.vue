<template>
  <div
    class="landing-page__section bg-white py-none course-section"
    id="course-section"
  >
    <div class="width-limiter">
      <div class="row no-gutters mb-60">
        <div
          class="col-xl-4 bg-grey-light-3 pt-xl-60 pt-30 t-align-c course-section__navigation z-pos h-inherit"
        >
          <div class="heading-font stroke-font">LEARN.</div>
          <div class="heading-font">LEARN.</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg"
            class="pb-xl-60 pb-30"
          />
          <div class="row no-gutters align-items-center">
            <div
              class="col-xl-12 col-4 p-sm-30 p-10 course-section__option row no-gutters"
              id="online-courses"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/online-courses.svg"
                class="mr-xl-15"
              />
              <div class="heading-5 bold flex-1 t-align-l d-xl-block d-none">
                Online Courses
              </div>
              <div
                class="col-12 heading-6 bold t-align-c d-xl-none d-block mt-15"
              >
                Online<br />Courses
              </div>
            </div>
            <div
              class="col-xl-12 col-4 p-sm-30 p-10 course-section__option row no-gutters"
              id="classroom-courses"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/classroom-courses.svg"
                class="mr-xl-15"
              />
              <div class="heading-5 bold flex-1 t-align-l d-xl-block d-none">
                Classroom Courses
              </div>
              <div
                class="col-12 heading-6 bold t-align-c d-xl-none d-block mt-15"
              >
                Classroom<br />Courses
              </div>
            </div>
            <div
              class="col-xl-12 col-4 p-sm-30 p-10 course-section__option row no-gutters"
              id="live-courses"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/live-courses.svg"
                class="mr-xl-15"
              />
              <div class="heading-5 bold flex-1 t-align-l d-xl-block d-none">
                Live Courses
              </div>
              <div
                class="col-12 heading-6 bold t-align-c d-xl-none d-block mt-15"
              >
                Live<br />Courses
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 h-inherit">
          <div
            class="row no-gutters c-card-carousel overflow-hidden h-100"
            id="course-sections-carousel"
          >
            <CoursesSectionCardsSection courseType="online" />
            <CoursesSectionCardsSection courseType="classroom" />
            <CoursesSectionCardsSection courseType="live" />
          </div>
        </div>
      </div>
      <div class="card bg-grey-light-3">
        <div
          class="row no-gutters justify-content-between align-items-center side-tag"
        >
          <div class="flex-1 pr-25">
            <div class="heading-5">CONTACT OUT TECH EXPERTS FOR</div>
            <div class="text-orange heading-2 bold mt-1">
              FREE COUNSELLING SESSION
            </div>
          </div>
          <div class="col-md-4 t-align-md-r t-align-l mt-md-none mt-40">
            <button class="button-secondary" v-on:click="setShowModal(true)">
              Schedule a Session
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
                class="ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <ModalForm v-if="showModal" @close="setShowModal(false)">
      <ConsultationForm />
    </ModalForm>
  </div>
</template>

<script>
import CourseCardSmall from '@/components/courses/CourseCardSmall.vue'
import CoursesSectionCardsSection from '@/components/home/CoursesSectionCardsSection.vue'
import ModalForm from '@/components/misc/ModalForm.vue'
import ConsultationForm from '@/components/misc/ConsultationForm.vue'

export default {
  components: {
    CourseCardSmall,
    CoursesSectionCardsSection,
    ModalForm,
    ConsultationForm,
  },
  mounted() {
    const onlineButton = document.querySelector('#online-courses')
    const classroomButton = document.querySelector('#classroom-courses')
    const liveButton = document.querySelector('#live-courses')
    const carousel = document.querySelector('#course-sections-carousel')

    // [onlineButton, classroomButton, liveButton].forEach((courseButton) => {
    //   courseButton.classList.remove("active");
    // });

    onlineButton.classList.add('active')

    onlineButton.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })

      onlineButton.classList.add('active')
      classroomButton.classList.remove('active')
      liveButton.classList.remove('active')
    })

    classroomButton.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: carousel.clientWidth,
        behavior: 'smooth',
      })

      classroomButton.classList.add('active')
      onlineButton.classList.remove('active')
      liveButton.classList.remove('active')
    })

    liveButton.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: 2 * carousel.clientWidth,
        behavior: 'smooth',
      })

      liveButton.classList.add('active')
      classroomButton.classList.remove('active')
      onlineButton.classList.remove('active')
    })
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    setShowModal(value) {
      this.showModal = value
    },
  },
}
</script>
