
import { JsonApiDataStore } from 'jsonapi-datastore'

export default ({ app }, inject) => {
  const store = new JsonApiDataStore()
  inject('jsonApiStore', store)
}