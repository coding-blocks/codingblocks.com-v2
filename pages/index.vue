<template>
  <div class="a-cbm">
    <div class="landing-page">
      <!-- Welcome Section -->
      <WelcomeSection />

      <!-- Learn Section -->
      <div class="landing-page__section">
        <div class="row align-items-center no-gutters">
          <div class="col-xl-6 col-lg-7 z-pos">
            <div class="heading-font stroke-font text-black">LEARN.</div>
            <div class="heading-font">LEARN.</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_learn.svg"
            />
            <div class="my-50">
              <div class="heading-2 bold">Learning from the best!</div>
              <div class="mt-2 text-blue-light-1 heading-4">
                Mentors with <strong>100Yr+</strong> collective experience.
              </div>
            </div>
            <div>
              <button class="button-primary">
                Explore our courses
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
              </button>
              <br class="d-sm-none d-block" />
              <button class="button-secondary ml-sm-20 mt-sm-none mt-30">
                Get career advice
              </button>
            </div>
          </div>
          <div class="col-12 d-lg-none d-block t-align-c">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/learn.svg"
              class="landing-page__section__vector"
            />
          </div>
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/learn.svg"
          class="landing-page__section__vector d-lg-block d-none"
        />
      </div>

      <!-- Practice Section -->
      <div class="landing-page__section">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-7 z-pos">
            <div class="heading-font stroke-font text-grey-dark-2">
              PRACTICE.
            </div>
            <div class="heading-font">PRACTICE.</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_practice.svg"
            />
            <div class="my-50">
              <div class="heading-2 bold">For Developers, By Developers!</div>
              <div class="mt-2 text-pink-light-1 heading-4">
                Over <strong>5M+</strong> code submissions done.
              </div>
            </div>
            <div>
              <button class="button-primary">
                Explore Hacker Blocks
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
                <br class="d-sm-none d-block" />
              </button>
              <button class="button-secondary ml-sm-20 mt-sm-none mt-30">
                View discuss forum
              </button>
            </div>
            <div class="col-12 d-lg-none d-block t-align-c">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/practice.svg"
                class="landing-page__section__vector"
              />
            </div>
          </div>
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/practice.svg"
          class="landing-page__section__vector d-lg-block d-none"
        />
      </div>

      <!-- Hiring Section -->
      <div class="landing-page__section">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-7 z-pos">
            <div class="heading-font stroke-font text-black">GET HIRED.</div>
            <div class="heading-font">GET HIRED.</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_hire.svg"
            />
            <div class="my-50">
              <div class="heading-2 bold">Land your dream job!</div>
              <div class="mt-2 text-green-light-1 heading-4">
                We have over <strong>200+</strong> hiring partners onboard.
              </div>
            </div>
            <div>
              <button class="button-primary">
                Explore Hiring Blocks
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                  class="ml-2"
                />
              </button>
              <br class="d-sm-none d-block" />
              <button class="button-secondary ml-sm-20 mt-sm-none mt-30">
                View success stories
              </button>
            </div>
            <div class="col-12 d-lg-none d-block t-align-c">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/hire.svg"
                class="landing-page__section__vector"
              />
            </div>
          </div>
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/hire.svg"
          class="landing-page__section__vector d-lg-block d-none"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeSection from "@/components/home/WelcomeSection.vue";

export default {
  components: {
    WelcomeSection,
  },
};
</script>
