import '../assets/css/Near.css'
import { useState, useEffect } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

import Store from './Store'
import StoreModal from './StoreModal'
import * as RANK from '../js/rank'

import MarkerImg from '../assets/img/map_pin@2x.png'

function NaverMapAPI({ location, stores, tab, changeCenter, openModal }) {
  const navermaps = window.naver.maps;
  const zoomLevel = tab === 'rank' ? 14 : 14
  return (
    <NaverMap
      id='map-near'
      style={{
        width: '100%',
        height: '100%'
      }}
      center={{ lat: location.lat, lng: location.lng }}
      defaultZoom={zoomLevel}
      onCenterChanged={center => changeCenter(center)}
    >
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={new navermaps.LatLng({ lat: parseFloat(store.LATITUDE), lng: parseFloat(store.LONGITUDE) })}
          animation={0}
          icon={{
            url: MarkerImg,
            size: { width: 40, height: 40 },
            scaledSize: { width: 40, height: 40 }
          }}
          onClick={() => {
            openModal(store)
          }}
        />))}
    </NaverMap>
  );
}

function Near({ setLoading }) {
  const tabs = ['rank', 'near'];

  const [rank, setRank] = useState([]);
  const [selectedTab, setTab] = useState(tabs[0])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedStore, setStore] = useState({})
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState({})
  // const [centerLat, setCenterLat] = useState(0)
  // const [centerLng, setCenterLng] = useState(0)
  const [lastIndex, setLastIndex] = useState(0)
  const [isFirst, setFirst] = useState(false)
  const [isSearch, setSearch] = useState(false)

  const openModal = (store) => {
    setIsOpen(true)
    setStore(store)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setRank([])
      setSearch(true)
      selectedTab === 'rank' ? getRankWithAddress(query) : getNearWithAddress(query)
    }
  }
  const handleChange = (e) => {
    if (e.target.value === '') {
      setLastIndex(0)
      setSearch(false)
    }
    setQuery(e.target.value)
  }
  const getLocation = () => {
    setSearch(false)
    setLoading(true)
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLoading(false)
        setLocation({lat: position.coords.latitude, lng: position.coords.longitude});
      },
      function (error) {
        setLoading(false)
        setLocation({lat: 37.498095, lng: 127.027610});
      }
    );
  }
  const moreBtnClicked = () => {
    changeIndex(lastIndex + 10)
  }
  const changeIndex = (num) => {
    setLastIndex(num)
    selectedTab === 'rank' ? getRankWithLatLng(location, num) : getNearWithLatLng(location, num)
  }
  const getNearWithLatLng = (location, num) => {
    setLoading(true)
    RANK.getNearWithLatLng(location.lat, location.lng, num).then(result => {
      setRank(old => [...old, ...result])
      setLoading(false)
    })
  }
  const getNearWithAddress = (address, num) => {
    setLoading(true)
    RANK.getNearWithAddress(address, num).then(result => {
      setLocation({lat: result[0].REQ_LAT, lng: result[0].REQ_LON})
      setRank(old => [...old, ...result])
      setLoading(false)
    })
  }
  const getRankWithLatLng = (location, num) => {
    setLoading(true)
    RANK.getRankWithLatLng(location.lat, location.lng, num).then(result => {
      setRank(old => [...old, ...result])
      setLoading(false)
    })
  }
  const getRankWithAddress = (address, num) => {
    setLoading(true)
    RANK.getRankWithAddress(address, num).then(result => {
      setLocation({lat: result[0].REQ_LAT, lng: result[0].REQ_LON})
      setRank(old => [...old, ...result])
      setLoading(false)
    })
  }

  const changeCenter = (center) => {
    // setCenterLat(center.y)
    // setCenterLng(center.x)
    setLocation({lat: center.y, lng:center.x})
  }
  const searchCenter = () => {
    setRank([])
    setSearch(false)
    setLastIndex(0)
    selectedTab === 'rank' ? getRankWithLatLng(location, 0) : getNearWithLatLng(location, 0)
  }

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
    if (isFirst) {
      getRankWithLatLng(location, 0)
    }
  }, [isFirst])

  useEffect(() => {
    if (location.lat  && location.lng ) {
      setFirst(true)
    }
  }, [location])

  useEffect(() => {
    if (selectedTab === 'rank') {
      setRank([])
      setLastIndex(0)
      isSearch === false ? getRankWithLatLng(location, 0) : getRankWithAddress(query, 0)
    }
    if (selectedTab === 'near') {
      setRank([])
      setLastIndex(0)
      isSearch === false ? getNearWithLatLng(location, 0) : getNearWithAddress(query, 0)
    }
  }, [selectedTab])

  return (
    <div>
      <div className="search-content">
        <div className="input-container">
          <input className="input-search" onKeyDown={handleKeyDown} onChange={handleChange} id="location" placeholder="도로명, 지번 주소로 검색해주세요." />
        </div>
      </div>
      {!modalIsOpen && isFirst? <div className="near-content">
        <div className="near-map" id="map-near">
          {/* <div className="gps-btn" onClick={getLocation} /> */}
          <div onClick={() => searchCenter()} className="find-location-btn" ><span>이 지역 검색</span></div>
          <RenderAfterNavermapsLoaded
            ncpClientId={'fpfch34q29'}>
            <NaverMapAPI location={location} stores={rank} tab={selectedTab} changeCenter={changeCenter} openModal={openModal} />
          </RenderAfterNavermapsLoaded>
        </div>
      </div> : <div className="near-content" />}
      {rank.length > 0 ? <div className="location-content">
        <div className="search-guide"><span style={{ fontWeight: 'bold' }}>2km</span> 내 검색결과</div>
        <div className="location-tab">
          <div onClick={() => setTab('rank')} id="rank" style={{ "left": "0" }} >
            {(selectedTab === 'rank') ? <div className="check-icon" /> : <div />}
            <span style={(selectedTab === 'rank') ? { color: '#FF363C', fontWeight: 'bold' } : {}}>명당순</span>
          </div>
          <div onClick={() => setTab('near')} id="near" style={{ "right": "0" }} >
            {(selectedTab === 'near') ? <div className="check-icon" /> : <div />}
            <span style={(selectedTab === 'near') ? { color: '#FF363C', fontWeight: 'bold' } : {}}>거리순</span>
          </div>
        </div>
      </div> : <div />}
      <div className="store-content">
        {/* {noData ? <div className="no-data"> No data </div> : <div />} */}
        {rank.map((store) => (
          <Store store={store} openModal={openModal} type={(selectedTab === 'rank') ? 'number' : 'distance'} key={store.STORE_ID} />))}
        {rank.length > 0 ? <div className="more-btn" onClick={moreBtnClicked} /> : <div />}
        <StoreModal closeModal={closeModal} modalIsOpen={modalIsOpen} store={selectedStore} />
      </div>
    </div>
  );
}

export default Near;