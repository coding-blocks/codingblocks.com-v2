<template>
  <div class="card p-none mb-50">
    <div class="p-30 border-bottom">
      <div class="row no-gutters align-items-center">
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/syllabus-grey-orange.svg"
        />
        <div class="flex-1 pl-15">
          <div class="heading-6 bold">Course Syllabus</div>
        </div>
      </div>
      <div class="mt-30">
        <div class="card p-none overflow-hidden">
          <div class="row no-gutters align-items-center">
            <div class="col-3 syllabus-section-button px-15 py-10 t-align-c">
              <div class="font-2 bold">Some Title</div>
            </div>
            <div class="col-3 syllabus-section-button px-15 py-10 t-align-c">
              <div class="font-2 bold">Some Title</div>
            </div>
            <div class="col-3 syllabus-section-button px-15 py-10 t-align-c">
              <div class="font-2 bold">Some Title</div>
            </div>
            <div class="col-3 syllabus-section-button px-15 py-10 t-align-c">
              <div class="font-2 bold">Some Title</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-40 overflow-y-auto gradient-orange-scroll row no-gutters c-card-carousel"
      style="max-height: 500px"
    >
      <div style="border-left: solid 2px #f5f5f5" class="col-12">
        <div
          v-for="(content, index) in syllabus.firstSection.contents"
          :key="index"
        >
          <div class="accordion-container">
            <div class="p-30 accordion-container__accordion-head">
              <div
                class="row no-gutters align-items-center justify-content-between"
              >
                <div class="flex-1">
                  <div class="font-4 bold">{{ content.title }}</div>
                  <div class="font-2 text-grey mt-10">
                    {{ `${content.videos.length} Items | Duration : ` }}
                  </div>
                </div>
                <img
                  src="https://minio.codingblocks.com/amoeba/accordion-up.svg"
                  style="transform: rotate(180deg)"
                />
              </div>
            </div>
            <div class="accordion-container__accordion-body px-30 pb-10 d-none">
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
</template>

<script>
export default {
  props: ['syllabus'],
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
</style>
