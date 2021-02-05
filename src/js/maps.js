import axios from 'axios'
const naverUrl = 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode'
const API_ID = 'fpfch34q29'
const API_SECRET = 'XRG8mmgDWzDcg5lChpONQXLgkHNjPzRQgRHF4TWm'

const config = {
    headers: {}
}
config.headers['X-NCP-APIGW-API-KEY-ID'] = API_ID
config.headers['X-NCP-APIGW-API-KEY'] = API_SECRET

export function getLatLong(query) {
  const url = naverUrl + '?query=' + query
  return axios.get(url, config).then(result => {})
}