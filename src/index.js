import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Gamefield from './components/Game/Gamefield';
import './index.css';
import Footer from "./components/Footer"

ReactDOM.render(
  <React.StrictMode>
    <div className="screen">
      <Gamefield />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
