import React, { Component } from "react";
import "./Counter.css";

import Display from "./Display";

import ButtonsPanel from "./ButtonsPanel";

import Step from "./Step";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      stepValue: 1,
    };
  }

  stepChange = (step) => {
    this.setState({ stepValue: +step });
  };

  changeValue = (action) => {
    this.setState((prevState, prevProps) => {
      let currentCounterValue = prevState.counterValue;

      if (action === "add") {
        currentCounterValue += this.state.stepValue;
      } else if (action === "reinit") {
        currentCounterValue = prevProps.initValue;
      } else {
        currentCounterValue = 0;
      }
      return {
        counterValue: currentCounterValue,
      };
    });
  };

  render() {
    return (
      <div className="counter">
        Licznik: <Display displayValue={this.state.counterValue} />
        <ButtonsPanel
          buttonMethod={this.changeValue}
          stepValue={this.state.stepValue}
        />
        <Step stepValue={this.state.stepValue} updateStep={this.stepChange} />
      </div>
    );
  }
}
export default Counter;
