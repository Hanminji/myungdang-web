import '../assets/css/Rank.css'
import { useState } from 'react';
import RankModal from './RankModal'

function Rank() {
  const _dummy = [{
    RANK: 1,
    STORE_NAME: '개봉로또판매점',
    STORE_ADDR: '서울 구로구 개봉로 22길 66',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }, {
    RANK: 2,
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 3,
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 4,
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 5,
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  },
  {
    RANK: 6,
    STORE_NAME: '나눔로또판매점',
    STORE_ADDR: '서울 구로구 경인로 35길 56 의당빌딩',
    RANK_FIRST_COUNT: 30,
    RANK_SECOND_COUNT: 39,
    ACCUMULATED_MONEY: 30.4,
    PHONE_NUM: '02-0000-0000'
  }]
  const month = ['전체', '3개월', '6개월', '1년'];
  const [focus, setFocus] = useState(month[0]);
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
    <div className="rank-top">
      <div className="content">
        <div className="location-left">
          <select>
            <option value="">시·도 선택</option>
          </select>
        </div>
        <div className="location-right">
          <select>
            <option value="">시·군·구 선택</option>
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
      {_dummy.map((store, index) => (
        <div className="store" key={index}>
          {store.RANK < 4 ? <div className={"rank-img-" + store.RANK} /> : <div className="rank-text">{store.RANK}</div>}
          <div className="store-name">{store.STORE_NAME}</div>
          <div className="store-addr">{store.STORE_ADDR}</div>
          <div className="store-first">1등 &nbsp;
            <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_FIRST_COUNT}회</p>
          </div>
          <div className="store-second">2등 &nbsp;
            <p style={{ 'fontWeightt': 'bold', 'display': 'inline' }}>{store.RANK_SECOND_COUNT}회</p>
          </div>
          <div className="store-accumulate-money">누적 금액 &nbsp;
            <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.ACCUMULATED_MONEY}억</p>
          </div>
          <div className="store-modal-btn" onClick={() => openModal(store)} />
        </div>))};

      <RankModal closeModal={closeModal} modalIsOpen={modalIsOpen} store={selectedStore}/>
    </div>
    </div>
  )
}


export default Rank;