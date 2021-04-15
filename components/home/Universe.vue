<template>
  <div
    class="universe"
    :class="[size === 'small' ? 'universe--small mx-auto' : '']"
  >
    <div class="universe__star p-lg-20 p-10">
      <img :src="stars[counter].logo" />
    </div>
    <div v-for="(star, index) in currentStar" :key="index">
      <UniverseOrbit :orbit="star" :index="index" />
    </div>
  </div>
</template>

<script>
import UniverseOrbit from '@/components/home/UniverseOrbit'

export default {
  components: {
    UniverseOrbit,
  },
  props: ['size', 'stars'],
  data() {
    return {
      counter: 0,
      currentStar: null,
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
  watch: {
    counter: async function (val) {
      let star = this.stars[val].success_stories
      var arrayOfArrays = []
      arrayOfArrays.push(star.slice(0, 2))
      arrayOfArrays.push(star.slice(2, 5))
      arrayOfArrays.push(star.slice(5))
      this.currentStar = arrayOfArrays
    },
  },
}
</script>

<style scoped>
.universe.universe--small .universe__orbit.universe__orbit--1 {
  height: 130px;
  width: 130px;
}

.universe .universe__orbit.universe__orbit--1 {
  height: 200px;
  width: 200px;
}
</style>
