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
          <span style={{ 'color': '#4895FF' }}>1등 </span> <p style={{ 'fontWeight': 'bold', 'display': 'inline', 'color': '#4895FF' }}>{store.RANK_FIRST_COUNT}회</p> &nbsp;&nbsp;
          <span>2등 </span> <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{store.RANK_SECOND_COUNT}회</p> &nbsp;&nbsp;
          <span>누적금액 </span> <p style={{ 'fontWeight': 'bold', 'display': 'inline' }}>{(store.ACCUMULATED_MONEY / 100000000).toFixed(1)}억</p>
        </div>
      </div>
      <div className="store-modal-btn" onClick={() => openModal(store)} />
    </div>
  );
}

export default Store;