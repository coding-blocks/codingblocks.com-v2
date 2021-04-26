<template>
  <div class="video-container">
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
.video-container {
  height: 250px;
  width: 400px;
}

iframe {
  height: 250px;
  width: 400px;
  border-radius: 5px;
}

@media screen and (max-width: 575px) {
  .video-container {
    height: 188px;
    width: 300px;
  }

  iframe {
    height: 188px;
    width: 300px;
    border-radius: 5px;
  }
}
</style>
