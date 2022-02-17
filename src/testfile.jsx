import React, { Component } from 'react';
import { navbar } from './MockData';
import imga from './imga.png';
import imgd from './imgd.png';
import './App.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'Home',
    };
  }
  render() {
    return (
      <div className='navbar'>
        {navbar.map(({id,title}) => (
          <h1 key={id}
            onClick={() => this.setState({ active: title })}
            className={`link ${this.state.active === title && 'active'}`}
          >
            {title}
          </h1>
        ))}
      </div>
    );
  }
}
export default Test;
{
  /* <div className='navbar'>
        <h1
          onClick={() => this.setState({ active: 'home' })}
          className={`link ${this.state.active === 'home' && 'active'}`}
        >
          Home
        </h1>
        <h1
          onClick={() => this.setState({ active: 'about' })}
          className={`link ${this.state.active === 'about' && 'active'}`}
        >
          About
        </h1>
        <h1
          onClick={() => this.setState({ active: 'contacts' })}
          className={`link ${this.state.active === 'contacts' && 'active'}`}
        >
          Contacts
        </h1>
        <div>
          {' '}
          <img
            src={this.state.active ? imga : imgd}
            alt="Abror's img"
            width='150'
          />
          {this.state.active ? <h1>welcome</h1> : <h1>please login</h1>}
          <button onClick={() => this.setState({ active: !this.state.active })}>
            {this.state.active ? 'LogOut ' : 'LogIn'}
          </button>
        </div>
      </div> */
}
