<template>
  <div class="landing-page__section">
    <div class="width-limiter">
      <div
        class="row no-gutters align-items-center justify-content-between mb-50"
      >
        <div class="col-md-5 col-12 mb-md-none mb-25 heading-4 bold">
          Upcoming Events
        </div>
        <div class="tabs-secondary">
          <div class="tab active">All Events</div>
          <div class="tab">Workshops</div>
          <div class="tab">Contests</div>
        </div>
      </div>
      <div class="row no-gutters c-card-carousel-lg">
        <div
          class="col-lg-4 col-md-7 col-sm-8 col-11 pr-xl-40 pr-sm-30 pr-20"
          v-for="(event, index) in eventsPayload"
          :key="index"
        >
          <EventsCard :event="event" />
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
    }
  },
  components: {
    EventsCard,
  },
  async fetch() {
    this.eventsPayload = await this.$repositories.events.fetchEvents()
  },
}
</script>
