import React, { Component } from 'react';
import Box from './box/box'
import logo from './logo.svg';
import phil from './images/pm.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={phil} className="App-logo" alt="phil" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Box/>
        </header>
      </div>
    );
  }
}

export default App;
