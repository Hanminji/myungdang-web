import '../assets/css/Rank.css'
import { useState, useEffect } from 'react';

import Store from './Store';
import StoreModal from './StoreModal'

import Location from '../constant/location'
import * as RANK from '../js/rank'

function Rank({ setLoading }) {
  //TODO: 기간별 RANK 조회 기능
  // const month = ['전체', '3개월', '6개월', '1년'];
  // const [focus, setFocus] = useState(month[0]);

  const [rank, setRank] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedStore, setStore] = useState({});
  const [selectedArea, setArea] = useState('');
  const [selectedDetailArea, setDetailedArea] = useState('');
  let [lastIndex, setLastIndex] = useState(0);

  const openModal = (store) => {
    setIsOpen(true);
    setStore(store)
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const changeArea = (e) => {
    setArea(Number(e.target.value))
    setDetailedArea('')
    setRank([])
    getRank(0, Location.area0_format[Number(e.target.value)])
  };
  const changeDetailArea = (e) => {
    if (e.target.value !== '') {
      setDetailedArea(Number(e.target.value))
    } else {
      setDetailedArea(e.target.value)
    }
    setRank([])
    getRank(0, Location.area0_format[selectedArea], Location['detailArea' + selectedArea][e.target.value])
  }
  const changeIndex = (num) => {
    setLastIndex(num)
    getRank(num, Location.area0_format[selectedArea], Location['detailArea' + selectedArea][selectedDetailArea])
  }
  const moreBtnClicked = () => {
    changeIndex(lastIndex + 10)
  };
  const getRank = (index, city, town) => {
    setLoading(true);
    RANK.getRank(index, city, town).then(result => {
      setLoading(false)
      setRank(old => [...old, ...result])
    })
  };

  useEffect(() => {
    getRank()
  }, [])

  return (
    <div className="rank-top">
      <div className="content">
        <div className="location-left">
          <select value={selectedArea} onChange={changeArea}>
            <option value="">시·도 선택</option>
            {Location.area0.map((area, index) => (<option value={index} key={area}>{area}</option>))}
          </select>
        </div>
        <div className="location-right">
          <select value={selectedDetailArea} onChange={changeDetailArea}>
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
        {rank.length > 0 ? <div className="more-btn" onClick={moreBtnClicked} /> : <div />}
        <StoreModal closeModal={closeModal} modalIsOpen={modalIsOpen} store={selectedStore} />
      </div>
    </div>
  )
}


export default Rank;