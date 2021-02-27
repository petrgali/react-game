import React from 'react';
import ReactDOM from 'react-dom';
import Gamefield from './components/Game/Gamefield';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <div className="test" >
      <Gamefield />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);