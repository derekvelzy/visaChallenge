import React from 'react';
import styled from 'styled-components';
import Header from '../Header.js';
import Search from './Search.js';
import Contact from './Contact.js';

const Main = () => {

  return (
    <Container>
      <Header />
      <Search />
      <Contacts>
        <Contact first="John" last="Coltrane" number="(123) 456-7890" email="jcoltrane@gmail.com" />
        <Contact first="Miles" last="Davis" number="(123) 456-7890" email="mdavis@gmail.com" />
        <Contact first="Joe" last="Pass" number="(123) 456-7890" email="jpass@gmail.com" />
      </Contacts>
    </Container>
  )
};

const Contacts = styled.div`
  position: absolute;
  top: 140px;
`
const Container = styled.div`
  margin-left: 5vw;
  width: 90vw;
`

export default Main;