import '../assets/css/Rank.css'
import { useState } from 'react';
import StoreModal from './StoreModal'
import Store from './Store';

function Rank() {
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
        {_dummy.map((store) => (<Store store={store} openModal={openModal} type='rank' key={store.STORE_ID} />))}
        <div className="more-btn"></div>
        <StoreModal closeModal={closeModal} modalIsOpen={modalIsOpen} store={selectedStore} />
      </div>
    </div>
  )
}


export default Rank;