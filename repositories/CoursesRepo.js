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

  async fetchClassroomCourses(selectedCenter = 'pitampura,noida') {
    const response = await $axios.get(`courses?centres=${selectedCenter}`)
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
    const payload = deserialize(response.data)
    return payload.data
  },

  async fetchCourseForTrack(trackId) {
    const response = await $api.get(
      `career_tracks/${trackId}/relationships/courses`
    )
    const payload = deserialize(response.data)
    return payload.data
  },

  async fetchProfessions() {
    const response = await $api.get(`professions`)

    const payload = deserialize(response.data)
    return payload.data
  },

  async fetchRecommened(profession, status) {
    const response = await $api.post(`career_tracks/recommend`, {
      professionId: profession,
      status,
    })

    const payload = deserialize(response.data)
    return payload.data
  },
})
