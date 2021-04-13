<template>
  <div class="col-lg-6 col-sm-8 col-12">
    <div class="card card--dark">
      <div class="card__header card__header--border-highlight">
        <div class="flex-1">
          <div class="heading-6">WORKSHOP</div>
        </div>
        <div class="t-align-c">
          <div class="heading-4 bold">12</div>
          <div class="font-4">MAR</div>
        </div>
      </div>
      <div>
        <div class="heading-5 text-orange-dark-1 bold mb-10">
          Machine Learning
        </div>
        <div class="font-4">
          Learn how to build apps like spotify, netflix and more.
        </div>
      </div>
      <div class="mentor-row my-50">
        <div class="mentor-row__text-container align-self-center pr-100">
          <div>MENTOR</div>
          <div class="font-5 bold mt-5">Arnav G, Prateek N</div>
        </div>
        <div
          class="mentor-row__image-container mentor-row__image-container--mentor-2"
        >
          <img
            src="https://minio.codingblocks.com/amoeba/4078be4e-72e1-451a-9c4e-9223d2bbcc2c"
            alt="photo ofRishab Kapoor"
            class="mentor-row__image-container__mentor-image s-80x80"
          />
          <img
            src="https://minio.codingblocks.com/amoeba/4078be4e-72e1-451a-9c4e-9223d2bbcc2c"
            alt="photo ofRishab Kapoor"
            class="mentor-row__image-container__mentor-image s-80x80"
          />
        </div>
      </div>
      <div class="card__footer card__footer--border-highlight">
        <div class="flex-1">
          <div class="font-4">8:00 PM Onwards</div>
        </div>
        <button class="button-tertiary" @click="handleRegister">
          Register Now
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
            class="ml-2"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "event_type",
    "event_date",
    "mentor_names",
    "mentor_logo_1",
    "mentor_logo_2",
    "event_time",
  ],
  methods: {
    handleRegister() {
      const redirect_uri = encodeURI("http://localhost:3000/events/callback?event=")
      location.href="http://account.codingblocks.com/oauth/authorize?response_type=code&client_id=2387689957&redirect_uri=https://test.codingblocks.com/events/callback%3Fevent%3Dlegit-contest"
    }
  }
};
</script>
