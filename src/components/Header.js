import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Modal from './Home/Modal.js';

const Header = () => {
  const { open } = useSelector(state => state.modal);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <div>
      <Modal />
      <Container>
        <Title className="fontBold">Visa Contact List</Title>
      </Container>
    </div>
  )
};

const Container = styled.div`
  align-items: center;
  background: linear-gradient(90.13deg, #2831FF 28.2%, #2831FF 28.21%, #0208A6 99.99%, #0006A2 99.99%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 60px;
  justify-content: flex-start;
  width: 100vw;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`
const Title = styled.h1`
  color: white;
  font-size: 28px;
  margin-left: 5vw;
  @media (max-width: 1000px) {
    margin-left: 0vw;
  }
`

export default Header;