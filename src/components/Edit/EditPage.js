import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header.js';
import { setContacts } from '../../redux/contacts.js';
import { phoneCheck } from '../formFunctions.js';

const EditPage = () => {
  const history = useHistory();
  const { id, editFirst, editLast, editPhone, editEmail } = useSelector(state => state.edit);
  const dispatch = useDispatch();

  const [first, setFirst] = useState(editFirst);
  const [last, setLast] = useState(editLast);
  const [phone, setPhone] = useState(editPhone);
  const [email, setEmail] = useState(editEmail);
  const [firstErr, setFirstErr] = useState(false);
  const [lastErr, setLastErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  useEffect(() => {
    if (!id) {
      history.push('/');
    }
  }, []);

  const submit = () => {
    setFirstErr(false);
    setLastErr(false);
    setPhoneErr(false);
    // REGEX:
      // \w Starts with a word
      // @ followed by an @ character
      // Followed by another word
      // Followed by a valid domain
      // $ End expression right after the domain
    const emailex = /\w+@+\w+\.+(com|net|org|gov|edu)$/.test(email);
    const firstex = /^\w{1,}$/.test(first);
    const lastex = /^\w{1,}$/.test(last);
    const phoneex = /^.{14}$/.test(phone);
    if (!firstex) setFirstErr(true);
    if (!lastex) setLastErr(true);
    if (!phoneex) setPhoneErr(true);
    if (!emailex) setEmailErr(true);
    if (firstex && lastex && phoneex && emailex) {
      axios.patch('http://localhost:8000/patch', {
        data: {id, first, last, phone, email}
      })
      .then(() => {
        axios.get('http://localhost:8000/get')
        .then((res) => {
            dispatch(setContacts(res.data));
            history.push('/');
        })
      })
    }
  };

  return (
    <Container>
      <Header />
      <Form>
        <Title className="fontMed">Edit Contact</Title>
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
          onChange={(e) => phoneCheck(e.target.value, setPhone, setPhoneErr)}
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
          <Link to="/" style={{textDecoration: 'none'}}>
            <Cancel className="fontMed">Cancel</Cancel>
          </Link>
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
const FixedEmail = styled.div`
  align-self: flex-start;
  color: rgb(110, 110, 110);
  font-size: 20px;
  height: 46px;
  margin: 20px 0px 10px 0px;
  width: 50vw;
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

export default EditPage;