import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect'
import './../App.css';

class HomeLoginBar extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  render () {
   return ( 
    <div className="App">
      <BrowserView>
        <header className="App-LoginBar">
          {/* <label for="username"></label>
            <input type="text" name="name" id="username" placeholder="ID"/>
          <label for="password"></label>
            <input type="password" name="pw" id="password" placeholder="PW"/> */}
        </header>
      </BrowserView>
      <MobileView>
        <header className="App-LoginBar-M">
        {/* Open at Mobile!
        <label for="username">ID</label>
          <input type="text" name="name" id="username"/>
        <label for="password">PW</label>
          <input type="password" name="pw" id="password"/> */}
      </header>
      </MobileView>
    </div>
   )
 }
}

export default HomeLoginBar;
