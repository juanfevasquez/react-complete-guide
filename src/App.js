import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Nico" age="3"/>
        <Person name="Deisy" age="28"/>
        <Person name="Juanfe" age="35"/>
      </div>
    );
  }
}

export default App;
