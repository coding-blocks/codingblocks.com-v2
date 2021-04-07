<template>
  <div class="universe__orbit" :class="`universe__orbit--${index + 1}`">
    <div class="position-relative h-100 w-100">
      <div v-if="planetDistance">
        <div v-for="(planet, index) in orbit" :key="index">
          <UniversePlanet
            :planet="planet"
            :distance="planetDistance"
            :rotation="bias + (index + 1) * difference"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UniversePlanet from '@/components/home/UniversePlanet.vue'

export default {
  props: ['orbit', 'index'],
  components: {
    UniversePlanet,
  },
  data() {
    return {
      planetDistance: null,
      bias: 45 * this.index,
    }
  },
  mounted() {
    this.planetDistance = this.$el.clientWidth / 2

    setInterval(() => {
      this.bias = (this.bias + 0.15 * (this.index + 1)) % 360
    }, 20)
  },
  computed: {
    difference() {
      return 360 / this.orbit.length
    },
  },
}
</script>
