import axios from 'axios'
const URL = 'https://us-central1-myungdang-f73cd.cloudfunctions.net'

export function getRank() {
  return axios.get(URL + '/rank').then(result => {
    return result.data
  })
}