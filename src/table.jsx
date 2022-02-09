import React from 'react';

class State extends React.Component {
  constructor(value) {
    super(value);
    this.state = {
      count: 0,
      targetvalue:'',
      name:'',
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    const submit = () => {
      this.setState({
        name:this.state.targetvalue
      });
    };
    const onNameChange = (event) => {
      this.setState({
        targetvalue: event.target.value,
      });
    }
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        {}
        <button onClick={() => plus()}>+</button>
        <button onClick={() => minus()}>-</button>
        <hr />
        <h1>Name:{this.state.name}</h1>
        <input
          onChange={onNameChange}
          type='text'
          placeholder='enter your name'
        />
        <button onClick={submit}>submit</button>
      </div>
    );
  }
}

export default State;
