import React, { Component } from 'react';
import Topnav from './components/Topnav';
import TopJumbo from './components/TopJumbo';
import Skyline from './components/Skyline';
import ServiceDescript from './components/ServiceDescript';
import About from './components/About';
import Contact from './components/Contact'

const appWidth = {
  maxWidth: '1020px',
  margin: 'auto'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopJumbo appWidth={appWidth}/>
        <Topnav appWidth={appWidth}/>
        <Skyline />
        <ServiceDescript />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
