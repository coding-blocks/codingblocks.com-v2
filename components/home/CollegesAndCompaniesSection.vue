<template>
  <DividedSection>
    <template v-slot:left_section>
      <div class="t-align-lg-l t-align-c">
        <div class="heading-font stroke-font">
          FOR
        </div>
        <div class="heading-font">
          COLLEGES
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_colleges.svg"
        />
        <div class="my-sm-50 my-25">
          <div class="row">
            <div class="col-sm-4 pr-sm-40 mb-sm-none mb-40">
              <div
                class="row no-gutters align-items-center justify-content-between"
              >
                <div class="col-sm-12 col-3 mb-sm-25">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/placement-training-dark.svg"
                    style="height: 50px;"
                  />
                </div>
                <div class="flex-1">
                  <div class="heading-5">Placement Training</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 pr-sm-40 mb-sm-none mb-40">
              <div
                class="row no-gutters align-items-center justify-content-between"
              >
                <div class="col-sm-12 col-3 mb-sm-25">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/online-platform-dark.svg"
                    style="height: 50px;"
                  />
                </div>
                <div class="flex-1">
                  <div class="heading-5">Online Exam Platform</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div
                class="row no-gutters align-items-center justify-content-between"
              >
                <div class="col-sm-12 col-3 mb-sm-25">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/workshops-dark.svg"
                    style="height: 50px;"
                  />
                </div>
                <div class="flex-1">
                  <div class="heading-5">Workshops &amp; More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button-primary">
          Let's Connect
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
            class="ml-2"
          />
        </button>
      </div>
    </template>
    <template v-slot:right_section>
      <div class="t-align-lg-l t-align-c">
        <div class="heading-font stroke-font">
          FOR
        </div>
        <div class="heading-font">
          COMPANIES
        </div>
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_colleges.svg"
        />
        <div class="my-50">
          <div class="row">
            <div class="col-sm-4 pr-sm-40 mb-sm-none mb-40">
              <div class="row no-gutters align-items-center">
                <div class="col-sm-12 col-3 mb-sm-25">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/training-program-dark.svg"
                    style="height: 50px;"
                  />
                </div>
                <div class="flex-1">
                  <div class="heading-5">Training Programs</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 pr-sm-40 mb-sm-none mb-40">
              <div class="row no-gutters align-items-center">
                <div class="col-sm-12 col-3 mb-sm-25">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/hire-students-dark.svg"
                    style="height: 50px;"
                  />
                </div>
                <div class="flex-1">
                  <div class="heading-5">Hire Students</div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="row no-gutters align-items-center">
                <div class="col-sm-12 col-3 mb-sm-25">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/evaluations-dark.svg"
                    style="height: 50px;"
                  />
                </div>
                <div class="flex-1">
                  <div class="heading-5">Evaluations &amp; More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button-primary">
          Let's Connect
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
