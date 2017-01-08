import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      currentDisplay: '0',
      currentLog: [],
      total: 0

    }
  }



  handleClick(value){
    if (value == Number(value)) {
      this.setState({ currentDisplay: value });
    }

    this.addToLog(value);
  }

  render() {
    return (
      <div className="calculator">
        <Display currentDisplay={this.state.currentDisplay}/>
        <NumberPad handleClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
