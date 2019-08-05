import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const itemIconImg = css`
  height: 80px;
  width: 80px;
  margin: 10px;
`

const itemWrapper = css`
  width: min-content;
  &:hover > img {
    border: 2px solid red;
  }

  &:hover + div {
    display: flex;
  }
`
const statsIconImg = css`
  display: flex;
  width: 10%;
  height: 10%;
`

const itemHoverInfo = css`
  display: none;
  width: max-content;
  flex-direction: column;
  border: 1px solid #1b2d33;

  p {
    color: white;
  }
  &:hover {
    display: flex;
  }
`

const itemInfo = css`
  display: flex;
  height: min-content;
  align-items: center;
  border-bottom: 1px solid #1b2d33;
`

const itemDescription = css`
  display: flex;
  border-bottom: 1px solid #1b2d33;
`

const combinationsIconContainer = css`
  display: flex;
  align-items: center;
`

const combinations = css`
  display: flex;
`

const combinationsIcons = css`
  width: 20px;
  height: 20px;
  margin-right: 10px;
` 


export default () => (
  <>
    <div css={itemWrapper}>
      <img css={itemIconImg} src='https://rerollcdn.com/items/TearoftheGoddess.png' alt='Tear' />
    </div>

    <div css={itemHoverInfo}>
      <div css={itemInfo}>
        <img css={itemIconImg} src='https://rerollcdn.com/items/TearoftheGoddess.png' alt='Tear' />
        <div css={css`
          display: flex;
          flex-direction: column;
          margin-left: 10px;
        `}>
          <div css={css`
            display: flex;
          `}>
            <p>Tear of the Goddess</p>
          </div>

          <div css={css`
            display: flex;
          `}>
            <img css={statsIconImg} src='https://rerollcdn.com/ui/icon-mana.svg' alt='mana'/>
            <p css={css`
              margin-left: 5px;
              margin-top: 0px;`
            }>
              +20
            </p>
          </div>
        </div>
      </div>
      <div css={itemDescription}>
        <p css={css`
              margin-left: 5px;`
        }>
          +20 Mana
        </p>
      </div>
      <div css={combinations}>
        <p css={css`
          margin-right: 10px;
          margin-left: 5px;`
        }>
          Combines to: 
        </p>
        <div css={combinationsIconContainer}>
          <img css={combinationsIcons} src='https://rerollcdn.com/items/SpearofShojin.png' alt='mana'/>
          <img css={combinationsIcons} src='https://rerollcdn.com/items/SpearofShojin.png' alt='mana'/>
          <img css={combinationsIcons} src='https://rerollcdn.com/items/SpearofShojin.png' alt='mana'/>
          <img css={combinationsIcons} src='https://rerollcdn.com/items/SpearofShojin.png' alt='mana'/>
          <img css={combinationsIcons} src='https://rerollcdn.com/items/SpearofShojin.png' alt='mana'/>
          <img css={combinationsIcons} src='https://rerollcdn.com/items/SpearofShojin.png' alt='mana'/>
        </div>
      </div>
    </div>
  </>
);

