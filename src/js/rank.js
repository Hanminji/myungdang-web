import axios from 'axios'
const URL = 'https://asia-northeast3-myungdang-f73cd.cloudfunctions.net'
// const URL = 'http://localhost:5001/myungdang-f73cd/asia-northeast3'

export function getRank(index, city, town) {

  if (city && town) {
    city = encodeURI(city)
    town = encodeURI(town)
  }
  let config = {
    params: {
      LAST_INDEX: index,
      CITY: city,
      TOWN: town
    }
  }
  return axios.get(URL + '/rank', config).then(result => {
    return result.data
  })
}