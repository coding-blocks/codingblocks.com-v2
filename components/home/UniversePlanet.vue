<template>
  <div
    class="universe__orbit__planet"
    :style="{
      transform: transformStyle,
    }"
  >
    <img :src="planet.img" class="h-100 w-100" />
  </div>
</template>

<script>
export default {
  props: ['planet', 'rotation', 'distance'],
  data() {
    return {
      counter: 0,
    }
  },
  computed: {
    transformStyle() {
      return `rotate(${this.rotation}deg) translate(${this.distance}px) rotate(-${this.rotation}deg)`
    },
  },
  mounted() {
    setInterval(() => {
      if (this.counter < this.planet.length - 1) {
        this.counter++
      } else {
        this.counter = 0
      }
    }, 4000)
  },
}
</script>
