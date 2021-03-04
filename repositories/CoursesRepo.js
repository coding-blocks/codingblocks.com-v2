import { deserialize } from 'deserialize-json-api'

export default ($api) => ({

  async fetchFeaturedCourses() {
    const response = await $api.get(`featured_tags/courses`)
    
    const payload = deserialize(response.data)
    return payload.data;
  },
})
