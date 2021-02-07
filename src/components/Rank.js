import '../assets/css/Rank.css'
import { useState, useEffect } from 'react';

import Store from './Store';
import StoreModal from './StoreModal'

import Location from '../constant/location'
import Loading from '../components/Loading'
import * as RANK from '../js/rank'

function Rank() {
  //TODO: 기간별 RANK 조회 기능
  // const month = ['전체', '3개월', '6개월', '1년'];
  // const [focus, setFocus] = useState(month[0]);

  const [rank, setRank] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedStore, setStore] = useState({});
  const [selectedArea, setArea] = useState('');
  const [lastIndex] = useState(0);
  const [loading, setLoading] = useState(null);

  const openModal = (store) => {
    setIsOpen(true);
    setStore(store)
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const changeArea = (e) => {
    setArea(Number(e.target.value))
  };
  const moreBtnClicked = () => {
    // TODO: 10개 씩 load
  };
  const getRank = (city, town, index) => {
    setLoading(true);
    RANK.getRank().then(result => {
      console.log(result)
      setLoading(false)
      setRank(result)
    })
  };

  useEffect(() => {
    getRank()
  }, [])

  return (
    <div className="rank-top">
      {loading ? <Loading /> : <div />}
      <div className="content">
        <div className="location-left">
          <select value={selectedArea} onChange={changeArea}>
            <option value="">시·도 선택</option>
            {Location.area0.map((area, index) => (<option value={index} key={area}>{area}</option>))}
          </select>
        </div>
        <div className="location-right">
          <select>
            <option value="">시·군·구 선택</option>
            {Location['detailArea' + selectedArea].map((area, index) => (<option value={index} key={area}>{area}</option>))}
          </select>
        </div>
        {/* <div className="month">
          {month.map((mnth, index) => (
            <button className={"month-button" + (focus === mnth ? "-active" : "")}
              onClick={() => setFocus(mnth)} key={mnth}>
              {mnth}
            </button>
          ))}
        </div> */}
      </div>
      <div className="store-content">
        {rank.map((store) => (<Store store={store} openModal={openModal} type='rank' key={store.STORE_ID} />))}
        {lastIndex > 0 ? <div className="more-btn" onClick={() => moreBtnClicked} /> : <div />}
        <StoreModal closeModal={closeModal} modalIsOpen={modalIsOpen} store={selectedStore} />
      </div>
    </div>
  )
}


export default Rank;