import styled, { css } from 'styled-components';

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  @media (max-width: 900px) {
    align-items: center;
  }
`
export const BlueButton = styled.button`
  background: linear-gradient(180deg, #303AE4 0%, #050BC4 100%);
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  height: 40px;
  width: 100px;
  &:hover{
    background: #303AE4
  }
  &:focus{
    outline: none;
  }
  &:active{
    background: #050BC4;
  }
`
export const YellowButton = styled.button`
  background: rgb(171, 166, 22);
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  height: 40px;
  width: 100px;
  &:hover{
    background: rgb(189, 183, 23);
  }
  &:focus{
    outline: none;
  }
  &:active{
    background: rgb(145, 141, 19);
  }
`