import React, { Component } from 'react';
import TopNav from './components/Topnav';
import TopJumbo from './components/TopJumbo'

const appWidth = {
  maxWidth: '1020px',
  width: '100%',
  margin: 'auto'
}

class App extends Component {
  render() {
    return (
      <div className="App" style={appWidth}>
        <TopJumbo />
        <TopNav/>
      </div>
    );
  }
}

export default App;
