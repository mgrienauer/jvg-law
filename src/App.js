import React, { Component } from 'react';
import TopNav from './components/Topnav';
import TopJumbo from './components/TopJumbo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopJumbo />
        <TopNav/>
      </div>
    );
  }
}

export default App;
