import React, {useState} from 'react';
import logo from './wheel1.svg';
import './App.css';

import HomeLoginBar from './Homepage/H_LoginBar'

function App() {
  return(
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h3>Stop! Bus!</h3> 
        <HomeLoginBar></HomeLoginBar>
      </header>
    </div>
  
  );
}

  export default App;