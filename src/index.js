import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import Flower from'./context'

ReactDOM.render(
  <React.StrictMode>
    <Flower>
    <Root />
    </Flower>
  </React.StrictMode>,
  document.getElementById('root')
);
