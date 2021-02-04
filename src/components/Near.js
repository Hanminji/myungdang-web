import '../assets/css/Near.css'
import { useState } from 'react';
import Store from './Store'
import StoreModal from './StoreModal'
import MarkerImg from '../assets/img/myungdang_pin@2x.png'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

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
  const _dummy = [{
    RANK: 1,
    STORE_ID: 'ST0001',
    STORE_NAME: '개봉로또판매점',
    STORE_ADDR: '서울 구로구 개봉로 22길 66',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }, {
    RANK: 2,
    STORE_ID: 'ST0002',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 3,
    STORE_ID: 'ST0003',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 4,
    STORE_ID: 'ST0004',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 5,
    STORE_ID: 'ST0005',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 6,
    STORE_ID: 'ST0006',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }, {
    RANK: 7,
    STORE_ID: 'ST0007',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }, {
    RANK: 8,
    STORE_ID: 'ST0008',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }, {
    RANK: 9,
    STORE_ID: 'ST0009',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }, {
    RANK: 10,
    STORE_ID: 'ST0010',
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }]

  const tabs = ['rank', 'near'];
  const [selectedTab, setTab] = useState(tabs[0])
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedStore, setStore] = useState({})

  const openModal = (store) => {
    setIsOpen(true);
    setStore(store)
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="search-content">
        <div className="input-container">
          <input id="location" placeholder="도로명, 지번 주소로 검색해주세요." />
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