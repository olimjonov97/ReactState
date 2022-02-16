import React from 'react';
import { data } from './data';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: '',
      data: {
        status: 'OK',
        datalist: data,
      },
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.data.datalist.filter((item) => item.id !== id);
      this.setState({
        data: { ...this.state.data, datalist: res },
      });
    };
    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const onSave = () => {
      const newData = {
        id: Date.now(),
        name: this.state.name,
        status:this.state.status
      }  
      this.state.name.length && this.state.status.length?
        this.setState({
          data: {
            ...this.state.data, datalist: [...this.state.data.datalist, newData]
          },
          name: '',
          status:''
        }) : alert('please fill out');
    }
    return (
      <div>
        <input
          value={this.state.name}
          onChange={onChange}
          name='name'
          placeholder='name'
          type='text'
        />
        <input
          value={this.state.status}
          onChange={onChange}
          name='status'
          placeholder='status'
          type='text'
        />
        <button onClick={onSave}>save</button>
        {this.state.data.datalist.map((value, index) => (
          <h1 key={value.id}>
            {index + 1}
            {value.name} {value.status}{' '}
            <button onClick={() => onDelete(value.id)}>delete</button>
          </h1>
        ))}
      </div>
    );
  }
}
export default Test;
