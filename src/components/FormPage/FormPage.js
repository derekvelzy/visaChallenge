import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header.js';
import { setContacts } from '../../redux/contacts.js';
import {
  inputs, Container, flexBetween, long, short, BlueBtn, YellowBtn
} from '../globalComponents.js';

const FormPage = () => {
  const { id, editFirst, editLast, editPhone, editEmail } = useSelector(state => state.edit);
  const dispatch = useDispatch();
  const history = useHistory();

  const [statics, setStatics] = useState(['Create New Contact', 'Submit']);
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [firstErr, setFirstErr] = useState(false);
  const [lastErr, setLastErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  useEffect(() => {
    if (!id && window.location.pathname === '/edit') {
      history.push('/');
    } else if (window.location.pathname === '/edit') {
      setStatics(['Edit Contact', 'Save']);
      setFirst(editFirst);
      setLast(editLast);
      setPhone(editPhone);
      setEmail(editEmail);
    }
  }, []);

  const phoneCheck = (e) => {
    setPhoneErr(false);
    // REGEX:
      // ^ = start, $ = end
      // [0-9() -] means only characters between 0-9, parenths, spaces, and dashes
      // {0,14} means the string must be between 0-14 characters long
    if (/^[0-9() -]{0,14}$/.test(e)) {
      const str = e.replace(/[^0-9]/g, '');
      // Replace the character at 0 with '(' followed by the character at 0
      // Replace the following 3rd character with ') ' followed by the character at 3
      // Replace the following 3rd character with '-' and the char at that position
      let rep = str.replace(/^(.{0})/, '$1(')
      rep = str.length < 7 && str.length > 3 ?
        str.replace(/^(.{0})(.{3})/, '$1($2) ') :
        str.replace(/^(.{0})(.{3})(.{3})/, '$1($2) $3-')
      setPhone(rep);
    } else if (e.length < 15) {
      setPhoneErr(true);
    }
  };

  const submit = () => {
    setFirstErr(false);
    setLastErr(false);
    setPhoneErr(false);
    setEmailErr(false);
    const emailex = /\w+@+\w+\.+(com|net|org|gov|edu)$/.test(email);
    const firstex = /^\w{1,}$/.test(first);
    const lastex = /^\w{1,}$/.test(last);
    const phoneex = /^.{14}$/.test(phone);
    if (!firstex) setFirstErr(true);
    if (!lastex) setLastErr(true);
    if (!phoneex) setPhoneErr(true);
    if (!emailex) setEmailErr(true);
    if (window.location.pathname === '/edit' && firstex && lastex && phoneex && emailex) {
      axios.patch(`${window.location.origin}/patch`, { data: {id, first, last, phone, email } })
      .then(() => { resetData() })
      .catch((e) => alert('Error updating user', e));
    } else if (window.location.pathname === '/create' && firstex && lastex && phoneex && emailex) {
      axios.post(`${window.location.origin}/post`, { data: {first, last, phone, email } })
      .then(() => { resetData() })
      .catch((e) => alert('Error adding user', e));
    }
  };

  const resetData = () => {
    axios.get(`${window.location.origin}/get`)
      .then((res) => {
        dispatch(setContacts(res.data));
        history.push('/');
      })
      .catch((e) => alert('Error getting contacts', e));
  };

  return (
    <Container>
      <Header />
      <Form>
        <Title className='fontMed'>{statics[0]}</Title>
        <LongBox>
          <div>
            <ShortBox>
              <div className='fontReg'>First</div>
              <Error className='fontReg' style={{display: firstErr ? 'flex' :  'none'}}>
                Must enter first name
              </Error>
            </ShortBox>
            <NameInput
              placeholder='Jane'
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div >
            <ShortBox>
              <div className='fontReg'>Last</div>
              <Error className='fontReg' style={{display: lastErr ? 'flex' : 'none'}}>
                Must enter last name
              </Error>
            </ShortBox>
            <NameInput
              placeholder='Doe'
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
        </LongBox>
        <LongBox>
          <div className='fontReg'>Phone</div>
          <Error className='fontReg' style={{display: phoneErr ? 'flex' : 'none'}}>
            Must be valid phone number
          </Error>
        </LongBox>
        <Input
          placeholder='(xxx) xxx-xxxx'
          value={phone}
          onChange={(e) => phoneCheck(e.target.value)}
        />
        <LongBox>
          <div className='fontReg'>Email</div>
          <Error className='fontReg' style={{display: emailErr ? 'flex' : 'none'}}>
            Must be valid email
          </Error>
        </LongBox>
        <Input
          placeholder='janedoe@domain.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Buttons>
          <BlueBtn className='fontMed' onClick={submit}>{statics[1]}</BlueBtn>
          <Link to='/' style={{textDecoration: 'none'}}>
            <YellowBtn className='fontMed'>Cancel</YellowBtn>
          </Link>
        </Buttons>
      </Form>
    </Container>
  )
};

const Buttons = styled.div`
  ${flexBetween};
  margin-top: 20px;
  width: 230px;
`
const Error = styled.div`
  color: red;
  font-size: 14px;
  @media (max-width: 1000px) {
    font-size: 10px;
  }
`
const Form = styled.div`
  ${long};
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`
const Input = styled.input`
  ${inputs};
  ${long};
`
const LongBox = styled.div`
  ${flexBetween};
  ${long};
`
const NameInput = styled.input`
  ${inputs};
  ${short};
`
const ShortBox = styled.div`
  ${flexBetween};
  ${short};
`
const Title = styled.div`
  font-size: 26px;
  margin-bottom: 30px;
`

export default FormPage;