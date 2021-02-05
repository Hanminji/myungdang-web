import '../assets/css/Near.css'
import { useState } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

import Store from './Store'
import StoreModal from './StoreModal'

import * as MAP from '../js/maps'
import MarkerImg from '../assets/img/myungdang_pin@2x.png'

import { _dummy } from '../constant/dummy'

function NaverMapAPI() {
  const navermaps = window.naver.maps;

  return (
    <NaverMap
      id='map-near'
      style={{
        width: '100%',
        height: '100%'
      }}
      defaultCenter={{ lat: 37.551229, lng: 126.988205 }} // 지도 초기 위치
      defaultZoom={14} // 지도 초기 확대 배율
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={0}
        icon={{
          url: MarkerImg,
          size: { width: 55, height: 55 },
          scaledSize: { width: 55, height: 55 }
        }}
      />
    </NaverMap>
  );
}

function Near() {
  const tabs = ['rank', 'near'];

  const [selectedTab, setTab] = useState(tabs[0])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedStore, setStore] = useState({})
  const [query, setQuery] = useState('')

  const openModal = (store) => {
    setIsOpen(true)
    setStore(store)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      MAP.getLatLong(query)
    }
  }
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <div className="search-content">
        <div className="input-container">
          <input onKeyDown={handleKeyDown} onChange={handleChange} id="location" placeholder="도로명, 지번 주소로 검색해주세요." />
        </div>
      </div>
      {!modalIsOpen ? <div className="near-content">
        <div className="near-map" id="map-near">
          <div className="gps-btn" />
          <RenderAfterNavermapsLoaded
            ncpClientId={'fpfch34q29'}>
            <NaverMapAPI />
          </RenderAfterNavermapsLoaded>
        </div>
      </div> : <div className="near-content" />}
      <div className="location-content">
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
      </div>
      <div className="store-content">
        {_dummy.map((store) => (
          <Store store={store} openModal={openModal} type={(selectedTab === 'rank') ? 'number' : 'distance'} key={store.STORE_ID} />))}
        <div className="more-btn" />
        <StoreModal closeModal={closeModal} modalIsOpen={modalIsOpen} store={selectedStore} />
      </div>
    </div>
  );
}

export default Near;