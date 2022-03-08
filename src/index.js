import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import StyledComponent from './StyledComponent';
// import Active from './Greenshop/Active';
import Class from './Class';
import Hooks from './Hooks'


ReactDOM.render(
  <React.StrictMode>
    <div style={{display:'flex'}}>

    <Class/>
    <Hooks/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


