<template></template>
<script>
const config = require('./../../config')

export default {
  async mounted() {
    const code = this.$route.query.code;
    const event = this.$route.query.event;

    const response = await fetch(`${config.REDIRECT_BACKEND_URI}/api/events_callback`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code, event
      })
    })

    this.$router.replace(`/events/${event}`)

  },
}
</script>
