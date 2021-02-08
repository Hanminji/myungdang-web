import { Header, Tab, Near, Rank } from './components'
import { useState } from 'react';
import Loading from './components/Loading'

import './assets/css/App.css'

function App() {
  const [tabName, setTabName] = useState('rank');
  const [loading, setLoading] = useState(null);

  const changeTab = (tabName) => {
    setTabName(tabName);
  };

  return (
    <div>
      {loading ? <Loading /> : <div />}
      <div>
        <Header />
          <Tab changeTab={changeTab} tabName={tabName} />
      </div>
      { tabName === 'rank' ? <Rank setLoading={setLoading} /> : <Near />}
    </div>
  );
}

export default App;
