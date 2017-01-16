import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import calcFunctions from '../calcFunctions';
const { add, subtract, multiply, divide, percentage } = calcFunctions; 

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      currentOperator: null,
      currentDisplay: '0',
      currentNumber: null,
      total: 0
    }
  }

  updateOperator(value){
    this.setState({ currentOperator: value });
  }
  
  updateTotal(value){
    this.setState({ total: value });
  }

  updateCurrentNumber(value){
    this.setState({ currentNumber: value });
  }

  updateDisplay(value){
    this.setState({ currentDisplay: value });
  }

  reset(result){
    this.updateTotal(result);
    this.updateDisplay(result);
    this.updateCurrentNumber(null);
    this.updateOperator(null);
  }

  reversePositivity(){
    const { currentNumber, total } = this.state;
    const reversedCurrent = Number(currentNumber) * -1;
    this.updateCurrentNumber(reversedCurrent);
    this.updateDisplay(reversedCurrent);
  }

  calculate(){
    const { currentDisplay, total, currentNumber, currentOperator } = this.state;
    const totalToInt = Number(total);
    const currentToInt = Number(currentNumber);

    let result;
    switch (currentOperator) {
      case "+":
        result = add(totalToInt, currentToInt);
        break;
      case "-":
        result = subtract(totalToInt, currentToInt);
        break;
      case "x":
        result = multiply(totalToInt, currentToInt);
        break;
      case "/":
        result = divide(totalToInt, currentToInt);
        break;
      case "%":
        result = percentage(currentToInt || totalToInt);
        break;
      default:
        result = total;
    }
    this.reset(result);
  }

  handleClick(value){
    if ((/^\d$/.test(value)) || value === "."){
      this.handleNumber(value);
    } else if (value === "+/-") {
      this.reversePositivity();
    } else if (value === 'C'){
      this.reset('0');
    } else if (value === '=') {
      this.calculate();
    } else {
      this.handleOperator(value);
    }
  }

  handleNumber(value){
    const { currentDisplay, currentOperator } = this.state;
    const newCurrent = currentDisplay === '0' || currentOperator ? value : currentDisplay + value;
    this.updateDisplay(newCurrent);
    this.updateCurrentNumber(newCurrent);
  }

  handleOperator(value){
    const { currentOperator, currentNumber, currentDisplay, total } = this.state;
    if (currentOperator) {
      this.calculate();
      this.updateOperator(value);
    } else {
      this.updateOperator(value);
      this.updateDisplay(value);
      this.updateTotal(Number(currentNumber) + Number(total));
      this.updateCurrentNumber(null);
    }
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
