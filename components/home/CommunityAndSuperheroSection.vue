<template>
  <DividedSection>
    <template v-slot:left_section>
      <div>
        <div class="heading-font stroke-font text-grey-dark-2">
          JOIN OUR
        </div>
        <div class="heading-font">COMMUNITY</div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_community.svg"
        />
        <div class="my-50">
          <div class="heading-2 bold">
            Coding: The present and future
          </div>
          <div class="mt-2 text-yellow heading-4">
            Connect with like minded people.
          </div>
        </div>
      </div>
      <div
        class="row no-gutters align-items-center d-xl-flex d-lg-none d-sm-flex d-none"
      >
        <button class="button-secondary flex-1" style="max-width: fit-content">
          <div class="flex-1 t-align-l">Visit Youtube channel</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/youtube_button.svg"
            class="ml-2"
          />
        </button>
        <button
          class="button-secondary ml-4 flex-1"
          style="max-width: fit-content"
        >
          <div class="flex-1 t-align-l">Join Telegram channel</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/telegram_button.svg"
            class="ml-2"
          />
        </button>
      </div>
      <div class="d-xl-none d-lg-block d-sm-none d-block">
        <button class="button-secondary">
          Visit Youtube channel
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/youtube_button.svg"
            class="ml-2"
          />
        </button>
        <button class="button-secondary mt-30">
          Join Telegram channel
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/telegram_button.svg"
            class="ml-2"
          />
        </button>
      </div>
    </template>
    <template v-slot:right_section>
      <div>
        <div class="heading-font stroke-font text-grey-dark-2">
          BECOME A
        </div>
        <div class="heading-font">SUPERHERO</div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_superhero.svg"
        />
        <div class="my-50">
          <div class="heading-2 bold">Campur Ambassador!</div>
          <div class="mt-2 text-blue-light-1 heading-4">
            Learn and eaarn, all with lots of fun.
          </div>
        </div>
      </div>
      <div>
        <button class="button-secondary">
          Learn More
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
