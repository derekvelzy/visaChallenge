import styled, { css } from 'styled-components';

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
`
export const boxStyling = css`
  border-radius: 5px;
  border: 0;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
`
const btn = css`
  ${boxStyling};
  color: white;
  cursor: pointer;
  height: 40px;
  width: 100px;
`
export const inputs = css`
  ${boxStyling};
  font-size: 18px;
  height: 46px;
  margin: 10px 0px 30px 0px;
  padding-left: 20px;
`
export const long = css`
  width: 50vw;
  @media (max-width: 1000px) {
    width: 80vw;
  }
`
export const short = css`
  width: 24vw;
  @media (max-width: 1000px) {
    width: 38vw;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  @media (max-width: 1000px) {
    align-items: center;
  }
`
export const BlueBtn = styled.button`
  ${btn};
  background: linear-gradient(180deg, #303AE4 0%, #050BC4 100%);
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
export const YellowBtn = styled.button`
  ${btn};
  background: rgb(171, 166, 22);
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