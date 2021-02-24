import React from 'react';
import ReactDOM from 'react-dom';
import Gamefield from './components/Gamefield';
import Stars from "./components/Stars"
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Gamefield />
    <Stars />
  </React.StrictMode>,
  document.getElementById('root')
);