<template>
  <div class="card card--equal-height">
    <div class="card__header card__header--border-highlight">
      <div class="flex-1">
        <div class="heading-6">{{ event.eventType.toUpperCase() }}</div>
      </div>
      <div class="t-align-c">
        <div class="heading-4 bold">{{ event.eventDate }}</div>
        <div class="font-4">MAR</div>
      </div>
    </div>
    <div>
      <div class="heading-5 text-orange-dark-1 bold mb-10">
        {{ event.title }}
      </div>
      <div class="font-4">
        {{ event.subject }}
      </div>
    </div>
    <div class="card__mentor-container" v-if="event.eventType === 'workshop'">
      <div class="mentor-row my-50">
        <div class="mentor-row__text-container align-self-center pr-100">
          <div>MENTOR</div>
          <div class="font-5 bold mt-10">
            <span v-for="(mentor, index) in event.mentors" :key="index">
              {{ mentor.name.split(' ')[0] }}
            </span>
          </div>
        </div>
        <div
          class="mentor-row__image-container mentor-row__image-container--mentor-2"
        >
          <img
            :src="mentor.img"
            v-for="(mentor, index) in event.mentors"
            :key="index"
            class="mentor-row__image-container__mentor-image s-80x80"
          />
        </div>
      </div>
    </div>
    <div class="mt-50" v-if="event.eventType === 'contest'">
      <div class="row no-gutters">
        <div class="pr-40">
          <div>LEVEL</div>
          <div class="font-5 bold mt-10">{{ event.level }}</div>
        </div>
        <div>
          <div>QUESTIONS</div>
          <div class="font-5 bold mt-10">{{ event.num_questions }}</div>
        </div>
      </div>
    </div>

    <div class="card__footer card__footer--border-highlight">
      <div class="flex-1">
        <div class="font-4">{{ event.time }} Onwards</div>
      </div>
      <NuxtLink class="button-tertiary" :to="`/events/${event.slug}`">
        Register Now
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/button-icon-orange.svg"
          class="ml-2"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['event'],
}
</script>
