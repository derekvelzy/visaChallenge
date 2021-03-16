import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Modal from './Home/Modal.js'

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
    <Margins>
      <Modal />
      <Container>
        <Link to="/" style={{textDecoration: 'none'}}>
          <Title className="fontBold">Visa Contact List</Title>
        </Link>
      </Container>
    </Margins>
  )
};

const Container = styled.div`
  background: linear-gradient(90.13deg, #2831FF 28.2%, #2831FF 28.21%, #0208A6 99.99%, #0006A2 99.99%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
`
const Margins = styled.div`
  margin-left: -5vw;
`
const Title = styled.div`
  color: white;
  cursor: pointer;
  font-size: 28px;
  margin-left: 5vw;
`

export default Header;