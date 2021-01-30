import {Tab, Near, Rank } from './components'

import { useState } from 'react';

function App() {
  const [tabName, setTabName] = useState('near');

  const changeTab = (tabName) => {
    setTabName(tabName);
  };

  return (
    <div>
      <Tab changeTab={changeTab}/>
      { tabName === 'near' ? <Near /> : <Rank />}
    </div>
  );
}

export default App;
