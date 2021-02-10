<template>
  <DividedSection>
    <template v-slot:left_section>
      <div class="t-align-sm-l t-align-c">
        <div class="heading-font stroke-font">
          PRACTICE.
        </div>
        <div class="heading-font">
          PRACTICE.
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_events.svg"
        />
        <div class="my-50">
          <div class="heading-2 bold">
            Practice real interview Questions!
          </div>
          <div class="mt-2 text-pink heading-4">
            Over <strong>50m+</strong> Code submissions done.
          </div>
        </div>
      </div>
      <div
        class="row no-gutters justify-content-sm-start justify-content-center"
      >
        <button class="button-primary">
          Start Practicing
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
            class="ml-2"
          />
        </button>
      </div>
    </template>

    <template v-slot:right_section>
      <div class="t-align-sm-l t-align-c">
        <div class="heading-font stroke-font">
          GET HIRED.
        </div>
        <div class="heading-font">
          GET HIRED.
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_news.svg"
        />
        <div class="my-50">
          <div class="heading-2 bold">
            Land your dream job!
          </div>
          <div class="mt-2 text-blue-light-1 heading-4">
            Apply to the dream job with more than <strong>400+</strong> hiring
            partners
          </div>
        </div>
      </div>
      <div
        class="row no-gutters justify-content-sm-start justify-content-center"
      >
        <button class="button-primary">
          Apply for jobs
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
            class="ml-2"
          />
        </button>
      </div>
    </template>
  </DividedSection>
</template>

<script>
import DividedSection from "@/components/misc/DividedSection.vue";

export default {
  components: {
    DividedSection,
  },
};
</script>
