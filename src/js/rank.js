import axios from 'axios'
const URL = 'https://us-central1-myungdang-f73cd.cloudfunctions.net'
// const URL = 'http://localhost:5001/myungdang-f73cd/us-central1'

export function getRank(city, town, index) {
  return axios.get(URL + '/rank?CITY=' + city + "&TOWN=" + town + "&LAST_INDEX=" + index).then(result => {
    return result.data
  })
}