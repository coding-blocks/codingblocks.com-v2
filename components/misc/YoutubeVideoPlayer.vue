<template>
  <div>
    <iframe :src="url" frameborder="0" controls allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
iframe {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
</style>
