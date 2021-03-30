import { deserialize } from 'deserialize-json-api'

export default ($axios, $api) => ({
  async fetchOnlineFeaturedCourses() {
    const response = await $api.get(`featured_tags/courses`)

    const payload = deserialize(response.data)
    return payload.data
  },

  async fetchLiveCourses() {
    const response = await $axios.get(`courses?centres=live`)
    return response.data
  },

  async fetchClassroomCourses() {
    const response = await $axios.get(`courses?centres=pitampura,noida`)
    return response.data
  },

  async fetchCourseBySlug(slug) {
    const response = await $axios.get(`courses/${slug}`)
    return response.data
  },
  async fetchTracks() {
    const response = await $api.get(`career_tracks`)
    const payload = deserialize(response)
    return payload.data
  },

  async fetchTrackById(id) {
    const response = await $api.get(`career_tracks/${id}`)
    const payload = deserialize(response)
    return payload.data
  },

  async fetchProfessions() {
    const response = await $api.get(`professions`)

    const payload = deserialize(response.data)
    return payload.data
  },
})
