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

  async fetchCourses() {
    const response = await $api.get(`courses`, {
      params: {
        exclude: `ratings,instructors.*`,
        include: `instructors,runs`,
        filter: {
          unlisted: false,
          domains: {
            $contains: ['hellointern']
          }
        },
        page: {
          limit: 100
        }
      }
    })
    return response.data
  },
})
