import axios from 'axios'

export function one() {
  let baseUrl = ''
  if (import.meta.env.DEV) {
    baseUrl = '/api'
  } else {
    baseUrl = 'http://api.tianapi.com'
  }
  const apikey = '<your apikey>'
  return axios({
    method: 'get',
    url: `${baseUrl}/one/index?key=${apikey}&rand=1`
  })
}
