export default ($axios, $api) => ({
  async fetchEvents() {
    const response = await $axios.get('events')
    return response.data
  },

  async fetchEventBySlug(slug) {
    const response = await $axios.get(`events/${slug}`)
    return response.data
  },
})
