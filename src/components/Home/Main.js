import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Contact from './Contact.js';
import Create from './Create.js';
import Header from '../Header.js';
import { setContacts } from '../../redux/contacts.js';
import { setDisplay } from '../../redux/display.js';
import { Container } from '../globalComponents.js';

const Main = () => {
  const { contacts } = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const displayWindowSize = () => {
    if (document.body.clientWidth <= 1000) {
      dispatch(setDisplay('mobile'));
    } else {
      dispatch(setDisplay('desktop'));
    }
  }

  useEffect(() => {
    displayWindowSize();
    window.addEventListener("resize", displayWindowSize);
    return () => {
      window.removeEventListener("resize", displayWindowSize);
    }
  }, [])

  useEffect(() => {
    axios.get(`${window.location.origin}/get`)
    .then((res) => {
      dispatch(setContacts(res.data));
    })
    .catch((e) => { alert('Error getting contacts', e) });
  }, []);

  return (
    <Container>
      <Header />
      <Create />
      <Contacts>
        {contacts.map((i) => (
          <Contact
            id={i._id}
            first={i.first}
            last={i.last}
            number={i.phone}
            email={i.email}
            key={i._id}
          />
        ))}
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