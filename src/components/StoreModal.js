import Modal from 'react-modal'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

import '../assets/css/StoreModal.css'
import MarkerImg from '../assets/img/myungdang_pin@2x.png'

Modal.setAppElement('#root')
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: '0px',
    borderRadius: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
};

function NaverMapAPIModal({ lat, lng }) {
  const navermaps = window.naver.maps;

  return (
    <NaverMap
      id='modal-map'
      style={{
        width: '100%',
        height: '100%'
      }}
      center={{ lat, lng }} // 지도 초기 위치
      defaultZoom={17} // 지도 초기 확대 배율
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(lat, lng)}
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
function StoreModal({ closeModal, modalIsOpen, store }) {
  const searchPath = (query) => {
    window.location.href = 'nmap://search?query=' + query + '&appname=myungdang'
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        style={customStyles}
      >
        <div className="map" id="modal-map">
          <RenderAfterNavermapsLoaded
            ncpClientId={'fpfch34q29'}>
            <NaverMapAPIModal lat={store.LATITUDE} lng={store.LONGITUDE} />
          </RenderAfterNavermapsLoaded>
        </div>
        <div className="store-layout1">
          <div className="modal-store-name">{store.STORE_NAME}</div>
          <div className="store-detail">
            <div>
              <div className="icon-location" />
              <div className="modal-store-addr"><span>{store.STORE_ADDR}</span></div>
            </div>
            <div style={{ 'border': 'none' }}>
              <div className="icon-money" />
              <div className="modal-first">
                1등&nbsp;<p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_FIRST_COUNT}회</p>&nbsp;&nbsp;&nbsp;
                2등&nbsp;<p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_SECOND_COUNT}회</p>&nbsp;&nbsp;&nbsp;
                누적 금액&nbsp;<p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{(store.ACCUMULATED_MONEY / 100000000).toFixed(1)}억</p>
              </div>
            </div>
          </div>
        </div>
        <div className="store-layout2">
          <div className="call-btn" onClick={() => closeModal()} ><p className="btn-text">닫기</p></div>
          <div className="find-btn" onClick={() => searchPath(store.STORE_ADDR)}><p className="btn-text">길찾기</p></div>
        </div>
      </Modal>
    </div >
  );
}

export default StoreModal;