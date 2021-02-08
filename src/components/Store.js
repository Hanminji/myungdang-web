import '../assets/css/Store.css'

function Store({ store, openModal, type }) {

  let number;
  if (type === 'rank') {
    number = store.RANK < 4 ? <div className={"rank-img-" + store.RANK} /> : <div className="rank-text"><p>{store.RANK}</p></div>
  } else if (type === 'number') {
    number = <div className="rank-text"><p>{store.RANK}</p></div>
  } else if (type === 'distance') {
    number = <div className="rank-distance"><p>20m</p></div>
  }
  return (
    <div className="store">
      {number}
      <div className="store-list"> 
        <div className="store-name">{store.STORE_NAME}</div>
        <div className="store-addr">{store.STORE_ADDR}</div>
        <div className="rank-content">
        <div className="store-first">1등 &nbsp;
          <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_FIRST_COUNT}회</p>
        </div>
        <div className="store-second">2등 &nbsp;
          <p style={{ 'fontWeightt': 'bold', 'display': 'inline' }}>{store.RANK_SECOND_COUNT}회</p>
        </div>
        <div className="store-accumulate-money">누적 금액 &nbsp;
           <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{Math.round(store.ACCUMULATED_MONEY / 100000000)}억</p>
        </div>
        </div>
      </div>
      <div className="store-modal-btn" onClick={() => openModal(store)} />
    </div>
  );
}

export default Store;