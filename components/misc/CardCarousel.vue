<template>
  <div class="col-xl-9 mt-xl-none mt-50">
    <div class="flex-row align-items-center">
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-big-left-inactive.svg"
        class="pointer d-md-block d-none"
      />
      <div class="row mx-lg-40 mx-md-20 c-card-carousel">
        <div class="col-lg-6 col-sm-8 col-12">
          <EventsCard />
        </div>
        <div class="col-lg-6 col-sm-8 col-12">
          <EventsCard />
        </div>
        <div class="col-lg-6 col-sm-8 col-12">
          <EventsCard />
        </div>
        <div class="col-lg-6 col-sm-8 col-12">
          <EventsCard />
        </div>
      </div>
      <img
        src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/nav-big-right-active.svg"
        class="pointer d-md-block d-none"
      />
    </div>
  </div>
</template>

<script>
import EventsCard from "@/components/misc/EventsCard.vue";

export default {
  components: {
    EventsCard,
  },
};
</script>
