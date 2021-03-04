
export default ($api) => ({

  async fetchFeaturedCourses() {
    const response = await $api.get(`featured_tags/courses`)
    return response.data
  },
})
