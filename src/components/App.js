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

const hoverInfo = css`
  display: flex;
`

const characterName = css`
  text-align: center;
`

function App() {
  return (
    <>
      <div css={characterWrapper}>
        <img css={characterIconImg} src='https://rerollcdn.com/characters/Swain.png' alt='swain' />
      </div>

      <div css={hoverInfo}>
        <div className='charcter-avator'>
          <img css={characterIconImg} src='https://rerollcdn.com/characters/Swain.png' alt='swain' />
          <p css={characterName}>swan</p>
        </div>
        <div css={css`
          display: flex;
          flex-direction: column;
          margin-left: 10px;
        `}>
          <div css={css`
            display: flex;
          `}>
            <img src='https://rerollcdn.com/icons/demon.png' />
            <p>Imperial</p>
          </div>

          <div css={css`
            display: flex;
          `}>
            <img src='https://rerollcdn.com/icons/demon.png' />
            <p>Demon</p>
          </div>

          <div css={css`
            display: flex;
          `}>
            <img src='https://rerollcdn.com/icons/demon.png' />
            <p>Shapeshifter</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
