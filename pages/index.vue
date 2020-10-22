<template>
  <div class="a-cbm">
    <div class="landing-page">
      <!-- Welcome Section -->
      <div class="landing-page__section">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-5 mb-lg-0 mb-50">
            <div class="heading-font stroke-font text-grey-dark-2">
              WELCOME TO
            </div>
            <div class="heading-font">CODING BLOCKS</div>
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_welcome.svg"
            />
            <div class="heading-2 bold my-50">
              India’s best technology learning platform.
            </div>
            <button class="button-primary">
              Get Started
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                class="ml-2"
              />
            </button>
          </div>
          <div class="col-xl-6 col-lg-7">
            <div class="row">
              <div class="col-sm-6 mb-sm-0 mb-30">
                <StatsCard
                  stat_number="40K+"
                  stat_title="Students Taught"
                  icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/workshops.svg"
                />
                <div class="mt-30"></div>
                <StatsCard
                  stat_number="80LPA"
                  stat_title="Package Offered"
                  icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/package.svg"
                />
              </div>
              <div class="col-sm-6 pt-sm-30">
                <StatsCard
                  stat_number="30K+"
                  stat_title="Students Placed"
                  icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/students_placed.svg"
                />
                <div class="mt-30"></div>
                <StatsCard
                  stat_number="200%"
                  stat_title="Salary Hike"
                  icon="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/placement-training.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatsCard from "@/components/home/StatsCard.vue";

export default {
  components: {
    StatsCard,
  },
};
</script>
