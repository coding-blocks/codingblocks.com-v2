import { deserialize } from 'deserialize-json-api'

export default ($axios, $api) => ({
  async banners() {
    const response = await $axios.get(`banner`)
    return response.data
  },

  async miniBanner() {
    const response = await $axios.get(`miniBanner`)
    return response.data
  },

  async successStories() {
    const response = await $axios.get(`topStories`)
    return response.data
  },

  async submitQuery(payload) {
    const response = await $axios.post(`query`, payload)
    return response.data
  },

  async fetchMembers() {
    const response = await $axios.get(`members`)
    return response.data
  },

  async fetchCourses() {
    const response = await $api.get(`courses`, {
      params: {
        exclude: `ratings,instructors.*,jobs`,
        include: `instructors,runs`,
        filter: {
          unlisted: false,
          title: {
            $iLike: `%${query}%`,
          },
        },
        page: {
          limit: 10,
          offset: 0,
        },
      },
    })
    return response.data
  },

  async fetchInstructors() {
    const response = await $api.get(`instructors`)
    const payload = deserialize(response.data)
    return payload.data
  },

  async fetchSuccessStoriesByPage() {
    const response = await $axios.get(`successStories`, {
      params: {
        limit: 50,
        offset: 0,
      },
    })
    return response.data.results
  },

  async fetchUniverse() {
    const response = await $axios.get(`universe`)
    return response.data
  },
})
