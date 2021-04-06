<template>
  <client-only>
    <div
      v-if="stars"
      class="universe"
      :class="[size === 'small' ? 'universe--small mx-auto' : '']"
    >
      <div class="universe__star p-20">
        <img :src="stars[counter].logo" />
      </div>
      <div v-for="(star, index) in stars" :key="index">
        <UniverseOrbit :stories="star.success_stories" :index="index" />
      </div>
    </div>
  </client-only>
</template>

<script>
import UniverseOrbit from '@/components/home/UniverseOrbit'

export default {
  components: {
    UniverseOrbit,
  },
  props: ['size'],
  data() {
    return {
      counter: 0,
      stars: null,
    }
  },
  mounted() {
    setInterval(() => {
      if (this.counter < this.stars.length - 1) {
        this.counter++
      } else {
        this.counter = 0
      }
    }, 4000)
  },

  async fetch() {
    this.stars = await this.$repositories.home.fetchUniverse()
  },
}
</script>
