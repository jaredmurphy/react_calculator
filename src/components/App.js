import React, { Component } from 'react';
import '../App.css';
import Calculator from './Calculator';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Calculator />
      </div>
    );
  }
}

export default App;
