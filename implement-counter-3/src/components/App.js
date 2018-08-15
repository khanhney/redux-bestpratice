import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CounterAction from "../actions/counter";
import DivAction from '../actions/div';

const mapStateToProps = state => {
    return {
      counter: state.counterReducer,
      div    : state.divReducer
    }
}

const mapDispatchToProps = dispatch => {
  return {
    increment : () => dispatch(CounterAction.increment()),
    decrement : () => dispatch(CounterAction.decrement()),
    incrementOtherValue: () => dispatch(CounterAction.incrementOtherValue6()),
    decrementOtherValue: () => dispatch(CounterAction.decrementOtherValue4()),
    changeValueWithInput: value => dispatch(CounterAction.changeValueWithInput(value)), 
    divValueInput: value => dispatch(DivAction.divForValue(value)),
    initValueDiv: () => dispatch(DivAction.initForDiv())
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      inputValueSet: 0,
      inputValueDiv: 2
    });

    // bind
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmitDivInput = this.handleSubmitDivInput.bind(this);
  }
  
  handleChangeInput = e => {
    this.setState({
      inputValueSet: parseInt(e.target.value)
    })
  }

  handleClick = () => {
    this.props.changeValueWithInput(this.state.inputValueSet)
  }
  
  hanleChangeDivInput = e => {
    let inputValue = parseInt(e.target.value);
    this.setState({ inputValueDiv: inputValue })
  }

  handleSubmitDivInput = () => {
    this.props.counter % this.state.inputValueDiv === 0 ? this.props.divValueInput(this.state.inputValueDiv) : alert('CANNOT DIV FOR NUMBER NOT % 2 === 0');
  }

  handleClickINITVALUE_DIV = () => {
    this.props.initValueDiv();
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Counter: <strong>{this.props.counter}</strong>
          Div    : <strong>{this.props.div}</strong>
        </p>
        <button onClick={this.props.increment}>INCREMENT INTO APP</button>
        <button onClick={this.props.decrement}>DECREMENT INTO APP</button>
        <button onClick={this.props.incrementOtherValue}>INCREMENT WITH 6</button>
        <button onClick={this.props.decrementOtherValue}>DECREMENT WITH 4</button>
        <input type='text' onChange={this.handleChangeInput}/>
        <button onClick={this.handleClick.bind(this)}>SUBMIT</button>

        <button onClick={this.handleClickINITVALUE_DIV.bind(this)}>INITVALUE_DIV</button>
        <input type='text' onChange={this.hanleChangeDivInput.bind(this)}/>
        <button onClick={this.handleSubmitDivInput}>SUBMIT</button>
      </div>
    );
  }
}

App.propTypes = {
  counter: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
