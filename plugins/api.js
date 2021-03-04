import Qs from 'qs';

export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })


api.interceptors.request.use((opts) => {
  opts.paramsSerializer = (params) =>
    Qs.stringify(params, {
      arrayFormat: 'brackets',
      encode: false,
    });
  return opts;
});

  // Set baseURL to something different
  api.setBaseURL('https://online-api.codingblocks.com/api/v2')

  // Inject to context as $api
  inject('api', api)
}