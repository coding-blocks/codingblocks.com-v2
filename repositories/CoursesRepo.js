import { deserialize } from 'deserialize-json-api'

export default ($axios, $api) => ({
  async fetchOnlineFeaturedCourses() {
    const response = await $api.get(`featured_tags/courses`)

    const payload = deserialize(response.data)
    return payload.data
  },

  async fetchLiveCourses() {
    const response = await $axios.get(`courses`)
    return response.data
  },

  async fetchCourseBySlug(slug) {
    const response = await $axios.get(`courses/${slug}`)
    return response.data
  },
})
