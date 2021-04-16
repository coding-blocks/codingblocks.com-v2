<template>
  <div class="landing-page__section pb-xl-50 pb-lg-35">
    <div class="width-limiter">
      <div
        class="row no-gutters align-items-center justify-content-between mb-50"
      >
        <div class="col-md-5 col-12 mb-md-none mb-25 heading-4 bold">
          Upcoming Events
        </div>
        <div class="tabs-secondary">
          <div
            class="tab active"
            v-on:click="updateEventsType($event)"
            id="all"
          >
            All Events
          </div>
          <div class="tab" v-on:click="updateEventsType($event)" id="workshop">
            Workshops
          </div>
          <div class="tab" v-on:click="updateEventsType($event)" id="contest">
            Contests
          </div>
        </div>
      </div>
      <div
        class="row no-gutters c-card-carousel-lg"
        v-if="finalEventsPayload.length !== 0"
      >
        <div
          class="col-lg-4 col-md-7 col-sm-8 col-11 pr-xl-40 pr-sm-30 pr-20 pb-lg-50"
          v-for="(event, index) in finalEventsPayload"
          :key="index"
        >
          <EventsCard :event="event" />
        </div>
      </div>
      <div class="all-center h-100" v-else>
        <div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/no-courses.svg"
          />
          <div class="text-gradient-orange heading-5 bold t-align-c">
            New Events will be announced soon!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventsCard from '@/components/events/EventsCard.vue'

export default {
  data() {
    return {
      eventsPayload: [],
      selectedEventType: 'all',
    }
  },
  components: {
    EventsCard,
  },
  async fetch() {
    this.eventsPayload = await this.$repositories.events.fetchEvents()
  },
  computed: {
    finalEventsPayload() {
      return this.eventsPayload.filter(
        (event) =>
          event.eventType === this.selectedEventType ||
          this.selectedEventType === 'all'
      )
    },
  },
  methods: {
    updateEventsType(event) {
      document.querySelectorAll('.tab').forEach((tab) => {
        tab.classList.remove('active')
      })

      event.currentTarget.classList.add('active')

      this.selectedEventType = event.currentTarget.id
    },
  },
}
</script>
