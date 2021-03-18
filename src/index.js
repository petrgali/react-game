import React from 'react';
import ReactDOM from 'react-dom';
import Gamefield from './components/Game/Gamefield';
import './index.css';
import Footer from "./components/Footer"
import { SFX } from "./utils/audioProvider"

SFX.mainTheme.play()
ReactDOM.render(
  <React.StrictMode>
    {/* TODO1: div and inside components move to separate App.jsx (Screen.jsx) component, because can be a lot of wrappers above  */}
    <div className="screen">
      <Gamefield />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
