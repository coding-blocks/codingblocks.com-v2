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
        class="faq-element-container pointer"
        v-for="(faq, index) in faqs"
        :key="index"
        @click="openFAQ($event)"
      >
        <div
          class="faq-question row no-gutters align-items-center justify-content-between p-20"
        >
          <div class="font-4 bold flex-1">
            {{ faq.question }}
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/plus.svg"
            class="sign"
          />
        </div>
        <div class="faq-answer p-20 d-none">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['faqs'],
  methods: {
    openFAQ(event) {
      const FAQContainer = event.currentTarget
      const FAQAnswer = FAQContainer.querySelector('.faq-answer')

      console.log(FAQAnswer.classList.contains('d-none'))
      if (FAQAnswer.classList.contains('d-none')) {
        FAQAnswer.classList.remove('d-none')
        FAQContainer.querySelector('.sign').src =
          'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/minus.svg'
      } else {
        FAQAnswer.classList.add('d-none')
        FAQContainer.querySelector('.sign').src =
          'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/plus.svg'
      }
    },
  },
}
</script>

<style scoped>
.faq-element-container {
  border-bottom: 1px solid #e9e9e9;
}
</style>
