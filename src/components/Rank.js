import '../assets/css/Rank.css'
import { useState } from 'react';

import Store from './Store';
import StoreModal from './StoreModal'

import Location from '../constant/location'
import { _dummy } from '../constant/dummy'

function Rank() {
  const month = ['전체', '3개월', '6개월', '1년'];
  const [focus, setFocus] = useState(month[0]);
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedStore, setStore] = useState({})
  const [selectedArea, setArea] = useState('')

  const openModal = (store) => {
    setIsOpen(true);
    setStore(store)
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const changeArea = (e) => {
    setArea(Number(e.target.value))
  }

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
          <select>
            <option value="">시·군·구 선택</option>
            {Location['detailArea' + selectedArea].map((area, index) => (<option value={index} key={area}>{area}</option>))}
          </select>
        </div>
        <div className="month">
          {month.map((mnth, index) => (
            <button className={"month-button" + (focus === mnth ? "-active" : "")}
              onClick={() => setFocus(mnth)} key={mnth}>
              {mnth}
            </button>
          ))}
        </div>
      </div>
      <div className="store-content">
        {_dummy.map((store) => (<Store store={store} openModal={openModal} type='rank' key={store.STORE_ID} />))}
        <div className="more-btn"></div>
        <StoreModal closeModal={closeModal} modalIsOpen={modalIsOpen} store={selectedStore} />
      </div>
    </div>
  )
}


export default Rank;