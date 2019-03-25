import React, { Component } from 'react';
import './App.css';
import Podcasts from './components/podcasts';
import Background from './components/background';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Podcasts />
      	<Background />
      </div>
    );
  }
}

export default App;
