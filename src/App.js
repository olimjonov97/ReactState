import './App.css';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
      surname: '',
      testdata: '',
      targetvalue:'',
      data: {
        status: 'Ok',
        datalist: [
          {
            id: 1,
            name: 'Zokir',
            status: 'student',
          },
          {
            id: 2,
            name: 'Abror',
            status: 'NONE',
          },
          {
            id: 3,
            name: 'Ilhom',
            status: 'manager',
          },
          {
            id: 4,
            name: 'Johe',
            status: 'Soldier',
          },
        ],
      },
    };
  }
  render() {
    const increment = (e) => {
            console.log(this.state.count, e.target.name);

      this.setState({ count: this.state.count + 1 });
    };
    const decrement = (e) => {
            console.log(e.target, e.target.name);

      this.setState({ count: this.state.count - 1 });
    };
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target, e.target.name);
    };
    const onDelete = (id) => {
      this.setState({
        data: {
          ...this.state.data,
          datalist: this.state.data.datalist.filter((value) => value.id !== id),
        },
      });
    };
    const testchnage = (e) => {
      
      this.setState({
        targetvalue: e.target.value,
      });
    }
    const submit = (e) => {
      this.setState({
        testdata: this.state.targetvalue ,
      });
    };
    return (
      <div>
        <h1>Hi State {this.state.count}</h1>
        <h1>Name:{this.state.name}</h1>
        <h1>test:{this.state.testdata}</h1>
        <h1>surName:{this.state.surname}</h1>
        <button name='count' onClick={(e) => increment(e)}>
          +
        </button>
        <button name='count' onClick={decrement}>
          -
        </button>
        <br />
        <input name='name' onChange={onChange} type='text' />

        <input onChange={testchnage} type='text' />
        <input name='surname' onChange={onChange} type='text' />
        <button onClick={submit}>Clicktest</button>
        <br />
        <hr />
        {this.state.data.datalist.length === 0 ? (
          <h1>No Data</h1>
        ) : (
          this.state.data.datalist.map((value) => (
            <div key={value.id}>
              <h1>
                {value.id} {value.name}{' '}
                <button onClick={() => onDelete(value.id)}>delete</button>
              </h1>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default App;
