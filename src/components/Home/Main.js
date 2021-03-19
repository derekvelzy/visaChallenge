import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact.js';
import Create from './Create.js';
import Header from '../Header.js';
import { setContacts } from '../../redux/contacts.js';
import { setDisplay } from '../../redux/display.js';
import { Container } from '../globalComponents.js';

const Main = () => {
  const { contacts } = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const windowSize = () => {
    if (document.body.clientWidth <= 1000) {
      dispatch(setDisplay('mobile'));
    } else {
      dispatch(setDisplay('desktop'));
    }
  };

  useEffect(() => {
    windowSize();
    window.addEventListener("resize", windowSize);
    return () => { window.removeEventListener("resize", windowSize) }
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contacts'));
    dispatch(setContacts(data));
  }, []);

  return (
    <Container>
      <Header />
      <Create />
      <Contacts>
        {contacts.map((i) => {
          return (
            <Contact
              id={i.id}
              first={i.first}
              last={i.last}
              number={i.phone}
              email={i.email}
              key={i.id}
            />
          )
        })}
      </Contacts>
    </Container>
  )
};

const Contacts = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-bottom: 200px;
  margin-left: 5vw;
  width: 100vw;
  @media (max-width: 1000px) {
    align-items: center;
    margin-left: 0vw;
  }
`

export default Main;