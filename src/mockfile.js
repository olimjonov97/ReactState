class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MockData,
      id: '',
      surname: '',
      name: '',
      status: '',
      option: 'Id',
      selected: {},
    };
  }
  render() {
    const onChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
      console.log(value);
    };
    const onAdd = () => {
      const newData = {
        id: this.state.id,
        surname: this.state.surname,
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, newData],
      });
      // this.state.surname.length && this.state.name.length
      //   ?
      //   : alert('please fill out');
    };

    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({
        data: res,
      });
    };
    const onSearch = (e) => {
      let res = MockData.filter((value) =>
        String(value[this.state.option])
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      console.log(e);
      this.setState({ data: res });
    };
    const onEdit = (value) => {
      this.setState({
        selected: value,
      });
      console.log(this.state.selected);
    };
    const onOption = (e) => {
      this.setState({ option: e.target.value });
    };

    return (
      <div width='800' className='container'>
        <select onChange={onOption} name='' id=''>
          <option name='id' value='id'>
            ID
          </option>
          <option name='surname' value='surname'>
            Surname
          </option>
          <option name='name' value='name'>
            Name
          </option>
          <option name='status' value='status'>
            Status
          </option>
        </select>

        <input
          onChange={(e) => onSearch(e)}
          placeholder='search here'
          type='text'
        />
        <table width='100%' border='1'>
          <thead>
            <tr>
              <th>№ </th>
              <th>ID </th>
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
                <td>
                  {this.state.selected.id === value.id ? <input /> : value.id}
                </td>
                <td>
                  {this.state.selected.id === value.id ? (
                    <input />
                  ) : (
                    value.surname
                  )}
                </td>
                <td>
                  {this.state.selected.id === value.id ? <input /> : value.name}
                </td>
                <td>
                  {this.state.selected.id === value.id ? (
                    <input />
                  ) : (
                    value.status
                  )}
                </td>
                <td>
                  <button onClick={() => onDelete(value.id)}>Delete</button>
                  {this.state.selected.id === value.id ? (
                    <button onClick={() => onEdit(value)}>save</button>
                  ) : (
                    <button onClick={() => onEdit(value)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='inputscontainer'>
          <input
            onChange={(value) => onChange(value)}
            name='id'
            className='inputs'
            placeholder='ID'
            type='text'
          />
          <input
            onChange={(value) => onChange(value)}
            name='surname'
            className='inputs'
            placeholder='Surname'
            type='text'
          />
          <input
            onChange={(value) => onChange(value)}
            name='name'
            className='inputs'
            placeholder='Name'
            type='text'
          />
          <input
            onChange={(value) => onChange(value)}
            name='status'
            className='inputs'
            placeholder='status'
            type='text'
          />
          <button onClick={onAdd} className='addbtn'>
            Add
          </button>
        </div>
      </div>
    );
  }
}
