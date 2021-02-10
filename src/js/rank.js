import axios from 'axios'
const URL = 'https://asia-northeast3-myungdang-f73cd.cloudfunctions.net/rank'
// const URL = 'http://localhost:5001/myungdang-f73cd/asia-northeast3/rank'

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
  return axios.get(URL + '/', config).then(result => {
    return result.data
  })
}

export function getNearWithLatLng(lat, lng, index) {
  let config = {
    params: {
      LATITUDE: lat,
      LONGITUDE: lng,
      LAST_INDEX: index,
    }
  }
  return axios.get(URL + '/find/near', config).then(result => {
    return result.data
  })
}

export function getNearWithAddress(address, index) {
  let config = {
    params: {
      ADDRESS: address,
      LAST_INDEX: index,
    }
  }
  return axios.get(URL + '/find/near', config).then(result => {
    return result.data
  })
}

export function getRankWithLatLng(lat, lng, index) {
  let config = {
    params: {
      LATITUDE: lat,
      LONGITUDE: lng,
      LAST_INDEX: index,
    }
  }
  return axios.get(URL + '/find/rank', config).then(result => {
    return result.data
  })
}

export function getRankWithAddress(address, index) {
  let config = {
    params: {
      ADDRESS: address,
      LAST_INDEX: index,
    }
  }
  return axios.get(URL + '/find/rank', config).then(result => {
    return result.data
  })
}