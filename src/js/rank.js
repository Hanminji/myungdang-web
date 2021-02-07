import axios from 'axios'
const URL = 'https://us-central1-myungdang-f73cd.cloudfunctions.net'

export function getRank(city, town, term) {
  return axios.get(URL + '/rank?CITY=' + city + '&TOWN=' + town + '$TERM=' + term).then(result => {
    return result.data
  })
}