import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Header from '../Header.js';
import Create from './Create.js';
import Contact from './Contact.js';
import Modal from './Modal.js';
import { setContacts } from '../../redux/contacts.js';

const Main = () => {
  const { contacts } = useSelector(state => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    axios.get('http://localhost:8000/get')
    .then((res) => {
      dispatch(setContacts(res.data));
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <Container>
      <Header />
      <Create />
      <Contacts>
        {contacts.map((i) => (
          <Contact id={i._id} first={i.first} last={i.last} number={i.phone} email={i.email} key={i._id}/>
        ))}
      </Contacts>
    </Container>
  )
};

const Contacts = styled.div`
  padding-bottom: 200px;
`
const Container = styled.div`
  margin-left: 5vw;
  width: 90vw;
`

export default Main;