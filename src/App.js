import { Header, Tab, Near, Rank } from './components'
import { useState } from 'react';

import './assets/css/App.css'

function App() {
  const [tabName, setTabName] = useState('rank');

  const changeTab = (tabName) => {
    setTabName(tabName);
  };

  return (
    <div>
      <div>
        <Header />
          <Tab changeTab={changeTab} tabName={tabName} />
      </div>
      { tabName === 'rank' ? <Rank /> : <Near />}
    </div>
  );
}

export default App;
