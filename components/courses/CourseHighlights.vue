<template>
  <div class="card p-none mb-50">
    <div class="row no-gutters align-items-center p-30 border-bottom">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/highlights-grey-orange.svg"
      />
      <div class="flex-1 pl-15">
        <div class="heading-6 bold">Highlights and Pre - requisites</div>
      </div>
    </div>
    <div
      class="px-40 overflow-y-auto gradient-orange-scroll"
      style="max-height: 500px"
    >
      <div style="border-left: solid 2px #f5f5f5">
        <div class="accordion-container">
          <div class="px-30 py-20 accordion-container__accordion-head">
            <div class="font-4">Extensive Coverage</div>
          </div>
        </div>
        <div class="divider-h content-divider px-30 bg-grey-light-3"></div>

        <div class="accordion-container">
          <div class="px-30 py-20 accordion-container__accordion-head">
            <div class="font-4">Extensive Coverage</div>
          </div>
        </div>
        <div class="divider-h content-divider px-30 bg-grey-light-3"></div>

        <div class="accordion-container">
          <div class="px-30 py-20 accordion-container__accordion-head">
            <div class="font-4">Extensive Coverage</div>
          </div>
        </div>
        <div class="divider-h content-divider px-30 bg-grey-light-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-container__accordion-head::after {
  font-size: 30px;
  left: -8px;
}
</style>
