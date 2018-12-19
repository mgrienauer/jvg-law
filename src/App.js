import React, { Component } from 'react';
import Topnav from './components/Topnav';
import TopJumbo from './components/TopJumbo';
import Skyline from './components/Skyline';
import ServiceDescript from './components/ServiceDescript';
import About from './components/About';
import Contact from './components/Contact';
import FeeArrangements from './components/FeeArrangements';

const appWidth = {
  maxWidth: '1020px',
  margin: 'auto'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topnav appWidth={appWidth}/>
        <TopJumbo appWidth={appWidth}/>
        <Skyline />
        <ServiceDescript />
        <About />
        <FeeArrangements />
        <Contact />
      </div>
    );
  }
}

export default App;
