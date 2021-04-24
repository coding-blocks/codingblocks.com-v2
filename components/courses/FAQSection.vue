<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="t-align-sm-l t-align-c mb-50">
        <div class="heading-4 bold mb-10">Frequently Asked Questions</div>
        <div class="font-4 text-grey">
          Find answers to the questions popping up in your head here.
        </div>
      </div>
      <div
        class="faq-element-container"
        v-for="(faq, index) in faqs"
        :key="index"
      >
        <div
          class="faq-question row no-gutters align-items-center justify-content-between p-20"
        >
          <div class="font-4 bold flex-1">{{ faq.question }}</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/plus.svg"
          />
        </div>
        <div class="faq-answer p-20">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['faqs'],
}
</script>

<style scoped>
.faq-element-container {
  border-bottom: 1px solid #e9e9e9;
}
</style>
