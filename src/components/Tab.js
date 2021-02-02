import '../assets/css/Tab.css'

function Tab({ changeTab, tabName }) {
  return (
    <div className="tab">
      {tabName === 'rank' ?
        <div>
          <div className="tab-rank" onClick={() => { changeTab('rank') }}>
            <div className="tab-rank-logo-active" />
            <div className="tab-rank-selected" />
          </div>
          <div className="tab-near" onClick={() => { changeTab('near') }}>
            <div className="tab-near-logo" />
          </div>
        </div> :
        <div>
          <div className="tab-rank" onClick={() => { changeTab('rank') }}>
            <div className="tab-rank-logo" />
          </div>
          <div className="tab-near" onClick={() => { changeTab('near') }}>
            <div className="tab-near-logo-active" />
            <div className="tab-near-selected" />
          </div>
        </div>}
    </div>
  );
}

export default Tab;
