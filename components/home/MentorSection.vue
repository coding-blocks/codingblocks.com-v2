<template>
  <div v-if="mentors" class="landing-page__section">
    <div class="width-limiter">
      <div class="row no-gutters justify-content-between align-items-center">
        <div class="flex-1 t-align-md-l t-align-c">
          <div class="heading-font stroke-font">OUR EXPERT</div>
          <div class="heading-font">MENTORS</div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/underline_events.svg"
          />
        </div>
        <div class="col-3 t-align-r d-md-block d-none">
          <NuxtLink to="/company" class="button-secondary">
            Learn more about us
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
              class="ml-2"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="mt-sm-50 mt-25">
        <div class="row no-gutters justify-content-center">
          <div v-for="(mentor, index) in mentors" :key="index">
            <div class="t-align-c px-20 mb-25">
              <img :src="mentor.photo" class="big-photo" />
              <div class="mt-25 heading-4 bold d-sm-block d-none">
                {{ mentor.name }}
              </div>
              <div class="mt-25 heading-6 bold d-sm-none d-block">
                {{ mentor.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="t-align-c d-md-none d-block">
        <NuxtLink to="/company" class="button-secondary">
          Learn more about us
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mentorsPayload: [],
    }
  },
  computed: {
    // somehow calling this server side fails; need to debug why
    mentors() {
      return process.client ? this.$jsonApiStore.sync(this.mentorsPayload) : []
    },
  },
  async fetch() {
    this.mentorsPayload = await this.$repositories.home.fetchInstructors()
  },
}
</script>
