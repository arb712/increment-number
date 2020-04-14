import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ex from './components/Ex';

import Increment from './components/Increment';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Increment/>
        {/* <Ex/> */}
    </div>
  );
}

export default App;
