<template>
  <div class="card p-none mb-50">
    <div class="row no-gutters align-items-center p-30 border-bottom">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/projects-grey-orange.svg"
      />
      <div class="flex-1 pl-15">
        <div class="heading-6 bold">Projects</div>
      </div>
    </div>
    <div
      class="px-40 overflow-y-auto gradient-orange-scroll"
      style="max-height: 500px"
    >
      <div style="border-left: solid 2px #f5f5f5">
        <div v-for="(project, index) in projects" :key="index">
          <div class="accordion-container">
            <div class="p-30 accordion-container__accordion-head">
              <div
                class="row no-gutters align-items-center justify-content-between"
              >
                <div class="flex-1 pr-20">
                  <div class="font-4 bold">{{ project.title }}</div>
                  <div class="font-2  mt-10">
                    {{ project.description }}
                  </div>
                </div>
                <img :src="project.img_url" class="s-100x100 br-5" />
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
  props: ['projects'],
}
</script>

<style scoped>
.accordion-container__accordion-head::after {
  font-size: 30px;
  left: -8px;
}
</style>
