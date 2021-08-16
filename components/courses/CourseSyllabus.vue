<template>
  <div class="card p-none mb-50">
    <div class="p-30 border-bottom">
      <div class="row no-gutters align-items-center">
        <div class="flex-1 pr-20">
          <div class="row no-gutters align-items-center">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/syllabus-grey-orange.svg"
            />
            <div class="flex-1 pl-15">
              <div class="heading-6 bold">Course Syllabus</div>
            </div>
          </div>
        </div>
        <a
          :href="syllabus_link"
          class="download-text position-relative pointer"
        >
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/download.svg"
            style="width: 20px"
          />
          <div
            class="card p-10 font-2  download-text-tooltip  t-align-c"
          >
            <div>Download Syllabus</div>
          </div>
        </a>
      </div>
      <div class="mt-30">
        <div class="card p-none overflow-hidden">
          <div class="row no-gutters align-items-center">
            <div
              v-for="(majorSection, index) in syllabus"
              :key="index"
              class="col-3 syllabus-section-button px-15 py-10 t-align-c h-inherit"
              :id="`syllabus-section-${index + 1}`"
            >
              <div class="text-ellipses">
                {{ majorSection.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row no-gutters c-card-carousel" id="syllabus-sections-carousel">
      <div
        class="px-40 overflow-y-auto gradient-orange-scroll col-12"
        style="max-height: 500px"
        v-for="(majorSection, index) in syllabus"
        :key="index"
      >
        <div style="border-left: solid 2px #f5f5f5">
          <div v-for="(content, index) in majorSection.contents" :key="index">
            <div class="accordion-container">
              <div class="p-30 accordion-container__accordion-head">
                <div
                  class="row no-gutters align-items-center justify-content-between"
                >
                  <div class="flex-1">
                    <div class="font-4 bold">{{ content.title }}</div>
                    <div class="font-2  mt-10">
                      {{ `${content.videos.length} Items | Duration : ` }}
                    </div>
                  </div>
                  <img
                    src="https://minio.codingblocks.com/amoeba/accordion-up.svg"
                    style="transform: rotate(180deg)"
                  />
                </div>
              </div>
              <div
                class="accordion-container__accordion-body px-30 pb-10 d-none"
              >
                <div
                  class="font-2 mb-20"
                  v-for="(video, id) in content.videos"
                  :key="id"
                >
                  {{ video.title }}
                </div>
              </div>
            </div>
            <div class="divider-h content-divider px-30 bg-grey-light-3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['syllabus', 'syllabus_link'],
  mounted() {
    document.querySelectorAll('.accordion-container').forEach((accordion) => {
      const accordionBody = accordion.querySelector(
        '.accordion-container__accordion-body'
      )
      accordion
        .querySelector('.accordion-container__accordion-head')
        .addEventListener('click', () => {
          if (accordionBody.classList.contains('d-none')) {
            accordionBody.classList.remove('d-none')
          } else {
            accordionBody.classList.add('d-none')
          }
        })
    })

    const syllabusSection1 = document.querySelector('#syllabus-section-1')
    const syllabusSection2 = document.querySelector('#syllabus-section-2')
    const syllabusSection3 = document.querySelector('#syllabus-section-3')
    const syllabusSection4 = document.querySelector('#syllabus-section-4')
    const carousel = document.querySelector('#syllabus-sections-carousel')

    syllabusSection1.classList.add('active')

    syllabusSection1.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })

      syllabusSection1.classList.add('active')
      syllabusSection2.classList.remove('active')
      syllabusSection3.classList.remove('active')
      syllabusSection4.classList.remove('active')
    })

    syllabusSection2.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: carousel.clientWidth,
        behavior: 'smooth',
      })

      syllabusSection1.classList.remove('active')
      syllabusSection2.classList.add('active')
      syllabusSection3.classList.remove('active')
      syllabusSection4.classList.remove('active')
    })

    syllabusSection3.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: 2 * carousel.clientWidth,
        behavior: 'smooth',
      })

      syllabusSection1.classList.remove('active')
      syllabusSection2.classList.remove('active')
      syllabusSection3.classList.add('active')
      syllabusSection4.classList.remove('active')
    })

    syllabusSection4.addEventListener('click', () => {
      carousel.scrollTo({
        top: 0,
        left: 3 * carousel.clientWidth,
        behavior: 'smooth',
      })

      syllabusSection1.classList.remove('active')
      syllabusSection2.classList.remove('active')
      syllabusSection3.classList.remove('active')
      syllabusSection4.classList.add('active')
    })
  },
}
</script>

<style scoped>
.accordion-container__accordion-head::after {
  font-size: 30px;
  left: -8px;
}

.syllabus-section-button {
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  cursor: pointer;
}

.syllabus-section-button:first-child {
  border-left: none;
}

.syllabus-section-button:last-child {
  border-right: none;
}

.syllabus-section-button:hover {
  color: #f26a3e;
}

.syllabus-section-button.active {
  color: white;
  background: linear-gradient(90deg, #fb8133, #ffba08);
}

.download-text-tooltip {
  position: absolute !important;
  display: none;
}

.download-text:hover .download-text-tooltip {
  display: block;
  top: -60px;
  left: -30px;
}
</style>
