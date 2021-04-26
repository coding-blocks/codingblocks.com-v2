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
            <div>
              <div class="t-align-c px-20 mb-25">
                <img :src="mentor.img" class="big-photo" />
                <div class="mt-25 heading-4 bold d-sm-block d-none">
                  {{ mentor.name }}
                </div>
                <div class="mt-25 heading-6 bold d-sm-none d-block">
                  {{ mentor.name }}
                </div>
                <div class="mt-1 text-orange font-5 bold">
                  {{ mentor.designation }}
                </div>
                <div
                  class="mt-10 row no-gutters align-items-center justify-content-center"
                >
                  <a
                    class="round mentor-highlight bg-white p-2 all-center"
                    v-for="(highlight, highlightIndex) in mentor.highlights"
                    :key="highlightIndex"
                    :href="highlight.link"
                  >
                    <img :src="highlight.logo" class="round h-100 w-100" />
                  </a>
                </div>
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
      members: [],
    }
  },
  computed: {
    mentors() {
      return this.members.filter((member) => member.designation === 'Mentor')
    },
  },
  async fetch() {
    this.members = await this.$repositories.home.fetchMembers()
  },
}
</script>

<style scoped>
.mentor-highlight {
  height: 50px;
  width: 50px;
}

.mentor-highlight:not(:last-child) {
  margin-right: 5px;
}

@media screen and (max-width: 767px) {
  .mentor-highlight {
    height: 30px;
    width: 30px;
  }
}
</style>
