import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const characterIconImg = css`
  height: 100px;
  width: 100px;
  border: 2px solid #893088;
`

const characterWrapper = css`
  height: 150px;
  width: 150px;

  &:hover > img {
    border: 2px solid #b89d27;
  }
`

function App() {
  return (
    <>
      <div css={characterWrapper}>
        <img css={characterIconImg} src='https://rerollcdn.com/characters/Swain.png' alt='swain' />
      </div>

      <div className='hover-info'>
        <div className='charcter-avator'>
          <img className='character-icon' src='https://rerollcdn.com/characters/Swain.png' alt='swain' />
          <p className='character-name'>swan</p>
        </div>
        <div className='character-origin-class'>
          <div className='icon'>
            <img src='https://rerollcdn.com/icons/demon.png' />
            <img src='https://rerollcdn.com/icons/demon.png' />
            <img src='https://rerollcdn.com/icons/demon.png' />
          </div>
          <div>
            <p>Imperial</p>
            <p>Demon</p>
            <p>Shapeshifter</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
