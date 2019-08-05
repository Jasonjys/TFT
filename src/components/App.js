import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import ItemsPopup from './ItemsPopup'
import Champion from './Champion';

function App() {
  return (
    <>
      <Champion/>
      <ItemsPopup/>
    </>
  );
}

export default App;
