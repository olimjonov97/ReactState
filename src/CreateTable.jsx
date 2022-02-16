import React from 'react';
import { MockData } from './TableData';
import './App.css';
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MockData,
      id: '',
      surname: '',
      name: '',
      status: '',
      selected: {},
      option: 'id',
    };
  }
  render() {
    const onSearch = (e) => {
      let res = MockData.filter((value) =>
        String(value[this.state.option])
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );

      this.setState({
        data: res,
      });
    };
    const onDelete = (id) => {
      let newList = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: newList });
    };
    const onSelect = (e) => {
      this.setState({
        option: e.target.value,
      });
    };
    const onChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
    const onAdd = () => {
      let newUser = {
        id: Date.now(),
        surname: this.state.surname,
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, newUser],
      });
    };
    const onEdit = (value) => {
      console.log(value);
      this.setState({
        selected: value,
        surname: value.surname,
        name: value.name,
        status: value.status,
      });
    };
    const onSave = () => {
      let res = MockData.map((value) =>
        value.id === this.state.selected.id
          ? {
              ...value,
              surname: this.state.surname,
              name: this.state.name,
              status: this.state.status,
            }
          : value
      );
      this.setState({
        date: res,
        selected: {},
      });
      console.log(res);
    };
    return (
      <div className='container'>
        <select onChange={onSelect} name='' id=''>
          <option value='id'>ID</option>
          <option value='surname'>Surname</option>
          <option value='name'>Name</option>
          <option value='status'>Status</option>
        </select>
        <input
          onChange={(value) => onSearch(value)}
          placeholder='search'
          type='text'
        />
        <table border='1'>
          <thead>
            <tr>
              <th>№</th>
              <th>ID</th>
              <th>Surname</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((value, index) => (
              <tr key={value.id}>
                <td>{index + 1}</td>
                <td>{value.id}</td>
                <td>
                  {this.state.selected.id === value.id ? (
                    <input
                      name='surname'
                      onChange={onChange}
                      value={this.state.surname}
                      type='text'
                    />
                  ) : (
                    value.surname
                  )}
                </td>
                <td>
                  {' '}
                  {this.state.selected.id === value.id ? (
                    <input
                      name='name'
                      onChange={onChange}
                      value={this.state.name}
                      type='text'
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>
                  {' '}
                  {this.state.selected.id === value.id ? (
                    <input
                      name='status'
                      onChange={onChange}
                      value={this.state.status}
                      type='text'
                    />
                  ) : (
                    value.status
                  )}
                </td>
                <td>
                  <button onClick={() => onDelete(value.id)}>delete</button>
                  {this.state.selected.id === value.id ? (
                    <button onClick={onSave}>save</button>
                  ) : (
                    <button onClick={() => onEdit(value)}>edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <input onChange={onChange} name='id' placeholder='ID' type='text' /> */}
        <input
          onChange={onChange}
          name='surname'
          placeholder='Surname'
          type='text'
        />
        <input onChange={onChange} name='name' placeholder='Name' type='text' />
        <input
          onChange={onChange}
          name='status'
          placeholder='Status'
          type='text'
        />
        <button onClick={onAdd}>ADD</button>
      </div>
    );
  }
}
export default Table;
