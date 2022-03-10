import React, { Component } from 'react';
import Hooks from'./Hooks'
export default class Class extends Component {
    constructor(props) {
        super(props)
        this.state={
          count: 1,
          name:'Webbrain'
        }
        
    }
  render() {
    return (
      <div style={{ flex: 1 }}>
        <h1> Class Component </h1>
        <h1>Count:{this.state.count}</h1>
        <h1>Name:{this.state.name}</h1>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>

        <Hooks count={this.state.count }/>
      </div>
    );
  }
}
