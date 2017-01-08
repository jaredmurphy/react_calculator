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

  addToLog(value){
    const logCopy = this.state.currentLog;
    logCopy.push(value);
    this.setState({ currentLog: logCopy });
    console.log('update log', this.state.currentLog);
  }

  resetLog(value){
    this.setState({ currentLog: [value] });
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
