import '../assets/css/Near.css'
import MarkerImg from '../assets/img/myungdang_pin@2x.png'
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

function NaverMapAPI() {
  const navermaps = window.naver.maps;

  return (
    <NaverMap
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
        animation={2}
        icon={{
          url: MarkerImg,
          size:{width:55,height:55},
          scaledSize:{width:55,height:55}
        }}
      />
    </NaverMap>
  );
}
function Near() {
  return (
    <div>
      <div className="search-content">
        <input className="input-search" placeholder="도로명, 지번 주소로 검색해주세요.">
        </input>
      </div>
      <div className="near-content">
        <div className="near-map" id="map">
            <RenderAfterNavermapsLoaded
              ncpClientId={'fpfch34q29'}>
              <NaverMapAPI />
            </RenderAfterNavermapsLoaded>
          </div>
      </div>
    </div>
  );
}

export default Near;