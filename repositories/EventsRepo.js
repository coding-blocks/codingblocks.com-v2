export default ($axios, $api) => ({
  async fetchEvents() {
    const response = await $axios.get('events')
    return response.data
  },

  async fetchEventBySlug(slug) {
    const response = await $axios.get(`events/${slug}`)
    return response.data
  },
  async fetchEventStatus(slug, code) {
    const response = await $axios.get(`registration_status`, {
      params: { slug, code },
    })
    return response.data
  },
})
