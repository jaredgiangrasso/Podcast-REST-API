import React, { Component } from 'react';
import './App.css';
import Podcasts from './components/Podcasts/podcasts';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Podcasts />
      </div>
    );
  }
}

export default App;
