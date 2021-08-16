<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div class="t-align-sm-l t-align-c mb-50">
        <div class="heading-4 bold mb-10">Mentors</div>
        <div class="font-4 ">
          About the mentors that will guide you through this course
        </div>
      </div>
      <div>
        <div
          class="row no-gutters align-items-center mentor-list-element"
          v-for="(mentor, index) in mentors"
          :key="index"
        >
          <div class="s-150x150 round d-sm-block d-none">
            <img :src="mentor.img" />
          </div>
          <div class="flex-1 pl-sm-30">
            <div class="s-100x100 round mb-20 d-sm-none d-block">
              <img :src="mentor.img" />
            </div>
            <div class="heading-6 bold">{{ mentor.name }}</div>
            <div class="mt-10 mb-20 font-2 orange">{{ mentor.contact }}</div>
            <div class="font-4">
              {{ mentor.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mentors'],
}
</script>

<style scoped>
.mentor-list-element:not(:last-child) {
  margin-bottom: 50px;
}
</style>
