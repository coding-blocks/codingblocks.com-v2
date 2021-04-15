<template>
  <div class="landing-page">
    <div class="landing-page__section bg-grey-light-3">
      <div class="width-limiter">
        <div class="row align-items-center">
          <div class="col-6 d-md-block d-none">
            <img :src="event.img_link" class="w-90" />
          </div>
          <div class="col-md-6">
            <div class="row no-gutters align-items-center mb-15">
              <img
                :src="
                  event.eventType === 'workshop'
                    ? 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/workshop.svg'
                    : 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/contest.svg'
                "
                alt=""
              />
              <div class="heading-6 ml-10">
                {{ event.eventType.toUpperCase() }}
              </div>
            </div>
            <div
              class="heading-1 mb-10 text-clamp-ellipses text-clamp-ellipses--3 word-wrap"
            >
              {{ event.title }}
            </div>
            <div class="row no-gutters align-items-center">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/orange-disc.svg"
              />
              <div class="heading-5 orange bold flex-1 pl-15">
                Registration Closes on
                {{ registrationDateStringComplete }}
              </div>
            </div>
            <img :src="event.img_link" class="d-md-none d-block my-30" />
            <div class="my-md-50 my-30">
              <div class="row no-gutters align-items-center mb-md-40 mb-20">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/date_small.svg"
                />
                <div class="flex-1 heading-5 pl-30">
                  {{ eventDateStringComplete }}
                </div>
              </div>
              <div class="row no-gutters align-items-center mb-md-40 mb-20">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/time_small.svg"
                />
                <div class="flex-1 heading-5 pl-30">
                  {{ eventTimeString }} Onwards
                </div>
              </div>
              <div class="row no-gutters align-items-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/venue_small.svg"
                />
                <div class="flex-1 heading-5 pl-30">{{ event.venue }}</div>
              </div>
            </div>
            <div class="row no-gutters align-items-center">
              <!-- Reroute this to form / login for registration -->
              <div v-if="status.isRegistered">
                <div class="font-4 bold text-gradient-orange">
                  Already Registered
                </div>
              </div>
              <div v-else class="position-relative tooltip-container">
                <button class="button-primary" @click="handleRegister">
                  Register using Oneauth
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon.svg"
                    class="ml-2"
                  />
                </button>
                <div
                  class="card p-10 font-2 text-grey-light-1 tooltip-body bg-white"
                >
                  You will be redirected to Oneauth for <br />
                  Login / Account creation (if you dont have one).
                </div>
              </div>
              <div class="flex-1 pl-40">
                <div class="row no-gutters align-items-center">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/users_small.svg"
                  />
                  <!-- Number of registered here -->
                  <div class="flex-1 pl-15 heading-6">
                    {{ event.registration_count }}
                  </div>
                </div>
              </div>
            </div>
            <div v-if="user.error">
              <div class="font-4 text-gradient-orange mt-10">
                An error occured during registration. Kindly Try Again.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="landing-page__section bg-white">
      <div class="width-limiter">
        <div class="row">
          <div class="col-md-6 mb-md-none mb-40 pr-md-60">
            <div class="heading-4 mb-md-50 mb-30 bold">About the Workshop</div>
            <div class="font-4 t-align-j">
              {{ event.description }}
            </div>
          </div>
          <div class="col-md-6">
            <div class="heading-4 bold mb-md-50 mb-30">Speakers</div>
            <div
              class="row no-gutters align-items-center mb-30"
              v-for="(mentor, index) in event.mentors"
              :key="index"
            >
              <div class="s-100x100 round">
                <img :src="mentor.img" />
              </div>
              <div class="flex-1 pl-30">
                <div class="font-5 bold">{{ mentor.name }}</div>
                <div class="mt-10 font-4 orange">{{ mentor.designation }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDate, getMonth, getYear } from '~/utils/date'
const config = require('../../../config')

export default {
  async asyncData({ params, $repositories }) {
    const user = await fetch('https://account.codingblocks.com/api/users/me', {
      credentials: 'include',
    }).then((res) => res.json())
    const event = await $repositories.events.fetchEventBySlug(params.id)
    const status = await $repositories.events.fetchEventStatus(
      params.id,
      user.id
    )

    return { event, user, status }
  },
  methods: {
    handleRegister() {
      const redirect_uri = encodeURI(
        `${config.CALLBACK_URL}/events/callback?event=${this.event.slug}`
      )
      location.href = `http://account.codingblocks.com/oauth/authorize?response_type=code&client_id=${config.ONEAUTH_CLIENT_ID}&redirect_uri=${redirect_uri}`
    },
  },
  computed: {
    eventDateStringComplete() {
      return `${getDate(this.event.eventDate)} ${getMonth(
        this.event.eventDate
      )} ${getYear(this.event.eventDate)}`
    },
    registrationDateStringComplete() {
      return `${getDate(this.event.registrationEndDate)} ${getMonth(
        this.event.registrationEndDate
      )} ${getYear(this.event.registrationEndDate)}`
    },
    eventTimeString() {
      const timeValue = String(this.event.time).split(':')[0]

      if (timeValue >= '12') {
        return timeValue === '12' ? '12 PM' : `${timeValue - 12} PM`
      } else {
        return timeValue === '00' ? '12 AM' : `${timeValue} AM`
      }
    },
  },
}
</script>

<style scoped>
.tooltip-body {
  position: absolute !important;
  display: none;
}

.tooltip-container:hover .tooltip-body {
  display: block;
  bottom: -80px;
}
</style>
