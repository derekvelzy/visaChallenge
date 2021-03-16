import React from 'react';
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Title className="fontBold">Visa Contact List</Title>
    </Container>
  )
};

const Container = styled.div`
  background: linear-gradient(90.13deg, #2831FF 28.2%, #2831FF 28.21%, #0208A6 99.99%, #0006A2 99.99%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  width: 100vw;
  height: 60px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
`
const Title = styled.div`
  color: white;
  font-size: 28px;
  margin-left: 60px;
`

export default Header;