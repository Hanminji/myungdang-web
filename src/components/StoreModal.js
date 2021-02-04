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

function NaverMapAPIModal() {
  const navermaps_modal = window.naver.maps;

  return (
    <NaverMap
      id='modal-map'
      style={{
        width: '100%',
        height: '100%'
      }}
      defaultCenter={{ lat: 37.551229, lng: 126.988205 }} // 지도 초기 위치
      defaultZoom={14} // 지도 초기 확대 배율
    >
        <Marker
        key={1}
        position={new navermaps_modal.LatLng(37.551229, 126.988205)}
        animation={0}
        icon={{
          url: MarkerImg,
          size:{width:55,height:55},
          scaledSize:{width:55,height:55}
        }}
      />
    </NaverMap>
  );
}
function StoreModal({ closeModal, modalIsOpen, store }) {
  return (
    <div>
      <Modal
        id=''
        isOpen={modalIsOpen}
        onRequestClose={() => closeModal()}
        style={customStyles}
      >
        <div className="map" id="modal-map">
          <RenderAfterNavermapsLoaded
            ncpClientId={'fpfch34q29'}>
            <NaverMapAPIModal />
          </RenderAfterNavermapsLoaded>
        </div>
        <div className="store-layout1">
          <div className="modal-store-name">{store.STORE_NAME}</div>
          <div className="icon-location" />
          <div className="modal-store-addr">{store.STORE_ADDR}</div>
          <div className="icon-phone" />
          <div className="modal-store-phone">{store.PHONE_NUM}</div>
          <div className="icon-money" />
          <div className="modal-first">1등&nbsp;
            <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_FIRST_COUNT}회</p>
          </div>
          <div className="modal-second">2등&nbsp;
            <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_SECOND_COUNT}회</p>
          </div>
          <div className="modal-money">누적 금액&nbsp;
            <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_SECOND_COUNT}회</p>
          </div>
        </div>
        <div className="store-layout2">
          <div className="call-btn"><p className="btn-text">전화연결</p></div>
          <div className="find-btn"><p className="btn-text">길찾기</p></div>
        </div>
        <div className="modal-close-btn" onClick={() => closeModal()}/>
      </Modal>
    </div>
  );
}

export default StoreModal;