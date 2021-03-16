import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header.js';
import { setContacts } from '../../redux/contacts.js';

const CreatePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [firstErr, setFirstErr] = useState(false);
  const [lastErr, setLastErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const handlePhone = (e) => {
    setPhoneErr(false);
    // REGEX:
      // ^ means the start of the string must begin with characters 0 - 9
      // [0-9() -] means only characters between 0-9, parenths, spaces, and dashes
      // {0,10} means the string must be between 0-10 characters long
      // $ means the end of the string
    if (/^[0-9() -]{0,14}$/.test(e)) {
      const str = e.replace(/[^0-9]/g, '');
      // REGEX:
        // Replace the character at 0 with '(' followed by the character at 0
        // Replace the following 3rd character with ') ' followed by the character at 3
        // Replace the following 3rd character with '-' and the char at that position
      let rep = str.replace(/^(.{0})/, '$1(')
      // Add more characters to the string as the length increases
      rep = str.length < 7 && str.length > 3 ?
        str.replace(/^(.{0})(.{3})/, '$1($2) ') :
        str.replace(/^(.{0})(.{3})(.{3})/, '$1($2) $3-')
      setPhone(rep);
    } else if (e.length < 15) {
      setPhoneErr(true);
    }
  };

  const submit = () => {
    setEmailErr(false);
    setFirstErr(false);
    setLastErr(false);
    setPhoneErr(false);
    // REGEX:
      // \w Starts with a word
      // @ followed by an @ character
      // Followed by another word
      // Followed by a valid domain
      // $ End expression right after the domain
    const emailex = /\w+@+\w+(.com|.net|.org|.gov)$/.test(email);
    const firstex = /^\w{1,}$/.test(first);
    const lastex = /^\w{1,}$/.test(last);
    const phoneex = /^.{14}$/.test(phone);
    console.log(phoneex);
    if (!emailex) setEmailErr(true);
    if (!firstex) setFirstErr(true);
    if (!lastex) setLastErr(true);
    if (!phoneex) setPhoneErr(true);
    if (emailex && firstex && lastex && phoneex) {
      axios.post('http://localhost:8000/post', {
        data: {first, last, phone, email}
      })
      .then(() => {
        axios.get('http://localhost:8000/get')
        .then((res) => {
            dispatch(setContacts(res.data));
        })
      })
    }
  };

  const cancelForm = () => {
    history.push('/');
  }

  return (
    <Container>
      <Header />
      <Form>
        <Title className="fontMed">Create New Contact</Title>
        <Names>
          <div>
            <LabelBox style={{ width: '24vw'}}>
              <Label className="fontReg">First</Label>
              <Error className="fontReg" style={firstErr ? {display: 'flex'} : {display: 'none'}}>
                Please enter first name
              </Error>
            </LabelBox>
            <NameInput
              placeholder="jane"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </div>
          <div>
            <LabelBox  style={{ width: '24vw'}}>
              <Label className="fontReg">Last</Label>
              <Error className="fontReg" style={lastErr ? {display: 'flex'} : {display: 'none'}}>
                Please enter last name
              </Error>
            </LabelBox>
            <NameInput
              placeholder="doe"
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
        </Names>
        <LabelBox>
          <Label className="fontReg">Phone</Label>
          <Error className="fontReg" style={phoneErr ? {display: 'flex'} : {display: 'none'}}>
            Must be valid phone number
          </Error>
        </LabelBox>
        <Input
          placeholder="(xxx) xxx-xxxx"
          value={phone}
          onChange={(e) => handlePhone(e.target.value)}
        />
        <LabelBox>
          <Label className="fontReg">Email</Label>
          <Error className="fontReg" style={emailErr ? {display: 'flex'} : {display: 'none'}}>
            Must be valid email
          </Error>
        </LabelBox>
        <Input
          placeholder="janedoe@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Buttons>
          <Submit className="fontMed" onClick={submit}>Submit</Submit>
          <Cancel className="fontMed" onClick={cancelForm}>Cancel</Cancel>
        </Buttons>
      </Form>
    </Container>
  )
};

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 280px;
`
const Cancel = styled.button`
  background: rgb(171, 166, 22);
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  width: 120px;
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
const Container = styled.div`
  margin-left: 5vw;
  width: 90vw;
`
const Error = styled.div`
  color: red;
`
const Form = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 20vw;
  margin-top: 40px;
  width: 50vw;
`
const Input = styled.input`
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  height: 46px;
  margin: 10px 0px 30px 0px;
  padding-left: 20px;
  width: 50vw;
`
const Label = styled.div`
  align-self: flex-start;
`
const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
`
const NameInput = styled.input`
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  height: 46px;
  margin: 10px 0px 20px 0px;
  padding-left: 20px;
  width: 24vw;
`
const Names = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
`
const Submit = styled.button`
  background: linear-gradient(180deg, #303AE4 0%, #050BC4 100%);
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  width: 120px;
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
const Title = styled.div`
  font-size: 26px;
  margin-bottom: 30px;
`

export default CreatePage;