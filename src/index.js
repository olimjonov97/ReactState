import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import StyledComponent from './StyledComponent';
// import Active from './Greenshop/Active';
import Class from './Class';
import HookPro from './HookPro'


ReactDOM.render(
  <React.StrictMode>
    <div style={{display:'flex'}}>

    {/* <Class/> */}
    <HookPro/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


