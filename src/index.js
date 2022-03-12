import React from 'react';
import ReactDOM from 'react-dom';
import { Flower } from './context';
import './index.css';
import Root from './root';
ReactDOM.render(
  <React.StrictMode>
    <Flower>
      <Root />
    </Flower>
  </React.StrictMode>,
  document.getElementById('root')
);
