import * as React from 'react';

export interface CounterButtonState {
  numberOfClicks: number;
}

export default class CounterButton extends React.Component<{}, CounterButtonState > {
    constructor(props){
        super(props);
        this.state = {
            numberOfClicks: 0
        };
    }
    incrementCount(){
        this.setState({
            numberOfClicks: this.state.numberOfClicks + 1
        });
    }
    render() {
    return <button onClick={this.incrementCount}>{this.state.numberOfClicks}</button>;
  }
}