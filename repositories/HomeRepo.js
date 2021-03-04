import banners from '../data/banners.json'

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
    const response = await $axios.get(`successStories`)
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
    return response.data
  },
})
