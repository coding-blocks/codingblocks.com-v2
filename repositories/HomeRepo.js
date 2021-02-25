import banners from '../data/banners.json'

export default ($axios) => ({
  banners() {
    return $axios.get(`banner`)
  },
})
