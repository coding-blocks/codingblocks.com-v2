<template>
  <div 
    class="universe__orbit__planet"
    :style="{
      transform: transformStyle
    }"
  >
    <img
      :src="planet"
    />
  </div>
</template>

<script>
export default {
  props: ["planet", "rotation", "distance"],
  computed: {
    transformStyle() {
      return `rotate(${this.rotation}deg) translate(${this.distance}px) rotate(-${this.rotation}deg)`
    }
  }
}
</script>