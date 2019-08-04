import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const characterWrapper = css`
  width: min-content;
  &:hover > img {
    border: 2px solid red;
  }

  &:hover + div {
    display: flex;
  }
`

const characterIconImg = css`
  height: 80px;
  width: 80px;
  border: 2px solid #b89d27;
`

const characterInfo = css`
  display: none;
  width: min-content;
  border: 1px solid #1b2d33;

  p {
    color: white;
  }

  &:hover {
    display: flex;
  }
`

const characterColumn = css`
  border-right: 1px solid #1b2d33;
  padding: 10px;

  p {
    margin: 5px
  }
`

const characterName = css`
  text-align: center;
`

const originAndClass = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5px 10px 5px 10px;
  border-right: 1px solid #1b2d33;
`

const row = css`
  display: flex;
  align-items: center;

  p {
    margin: 10px;
  }
`

const costWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  p {
    margin-left: 6px;
  }
`

const costImg = css`
  width: 20px;
  opacity: .54;
  color: hsla(0,0%,100%,.87);
`

function Champion() {
  return (
    <>
      <div css={characterWrapper}>
        <img css={characterIconImg} src='https://rerollcdn.com/characters/Swain.png' alt='swain' />
      </div>

      <div css={characterInfo}>
        <div css={characterColumn}>
          <img width='80px' src='https://rerollcdn.com/characters/Swain.png' alt='swain' />
          <p css={characterName}>swan</p>
        </div>
        <div css={originAndClass}>
          <div css={row}>
            <img src='https://rerollcdn.com/icons/demon.png' />
            <p>imperial</p>
          </div>

          <div css={row}>
            <img src='https://rerollcdn.com/icons/demon.png' />
            <p>demon</p>
          </div>

          <div css={row}>
            <img src='https://rerollcdn.com/icons/demon.png' />
            <p>shapeshifter</p>
          </div>
        </div>

        <div css={costWrapper}>
          <img css={costImg} src='https://rerollcdn.com/ui/icon-gold.svg' alt='cost' />
          <p>5</p>
        </div>
      </div>
    </>
  );
}

export default Champion;
