import React, { Component } from 'react';
import Display from './Display';
import NumberPad from './NumberPad';
import calcFunctions from '../calcFunctions';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      currentOperator: null,
      currentNumber: '0',
      total: null
    }
  }

  handleNumber(value){
    const { currentNumber } = this.state;
    const newCurrent = currentNumber === '0' ? value : currentNumber + value;
    this.setState({ currentNumber: newCurrent });
  }

  handleOperator(value){
    this.setState({currentOperator: value});
    this.combineTotalAndCurrent();
  }

  combineTotalAndCurrent(){
    const { total, currentNumber } = this.state;
    const newTotal = Number(total) + Number(currentNumber);
    this.setState({ total: newTotal, currentNumber: ''});
  }

  reset(value){
    this.setState({
      currentOperator: null,
      currentNumber: value,
      total: null
    });
  }

  calculate(){
    let { total, currentNumber, currentOperator } = this.state;
    total = Number(total);
    currentNumber = Number(currentNumber);
    const { add, subtract, multiply, divide, percentage } = calcFunctions;
    let result;

    switch (currentOperator) {
      case "+":
        result = add(total, currentNumber);
        break;
      case "-":
        result = subtract(total, currentNumber);
        break;
      case "x":
        result = multiply(total, currentNumber);
        break;
      case "/":
        result = divide(total, currentNumber);
        break;
      case "%":
        result = percentage(total);
        break;
      default:
        this.reset('0');
        return;
    }
    this.reset(result.toString());
  }

  submitAnswer(result){
    this.setState({ currentNumber: result });
  }

  handleClick(value){
    if ((/^\d$/.test(value)) || value === "."){
      this.handleNumber(value);
    } else if (value === 'C'){
      this.reset('0');
    } else if (value === '=') {
      this.calculate();
    } else {
      this.handleOperator(value);
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display currentDisplay={this.state.currentNumber}/>
        <NumberPad handleClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default Calculator;
