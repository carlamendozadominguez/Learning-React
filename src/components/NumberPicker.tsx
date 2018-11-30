import * as React from "react";

export interface NumberPickerState {
  counter: number;
}

export default class NumberPicker extends React.Component<{}, NumberPickerState> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decreaseCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return <div className="number-picker">
      <button className="number-picker-buttons" onClick={this.increaseCounter}>+</button>
      <span className="number-picker-label">{this.state.counter}</span>
      <button className="number-picker-buttons" onClick={this.decreaseCounter}>-</button>
    </div>;
  }
}