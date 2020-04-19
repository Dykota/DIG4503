import React from 'react';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Accomplishments from './components/Accomplishments';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Bio/>
        <Skills/>
        <Accomplishments/>
      </div>
    );
  }
}

export default App;
