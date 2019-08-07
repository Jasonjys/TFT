import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Popup from "reactjs-popup"


import ItemPopup from './ItemPopup'
import ChampionPopup from './ChampionPopup'


function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ChampionPopup />
      <ChampionPopup />
      <ChampionPopup />
      <ItemPopup />
    </div>
  );
}

export default App;
