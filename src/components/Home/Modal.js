import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../redux/modal.js';
import { setContacts } from '../../redux/contacts.js';
import axios from 'axios';

const Modal = () => {
  const { open, name, email } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const deleteContact = () => {
      axios.delete('http://localhost:8000/delete', {
        data: {email}
      })
      .then(() => {
        axios.get('http://localhost:8000/get')
        .then((res) => {
            console.log(res.data);
            dispatch(setContacts(res.data));
            dispatch(setModal(''));
        })
      })
  };

  const contentProps = useSpring({
    to: { marginBottom: open ? '0px' : '-100px' },
    from: {...contentStyle},
    config: { mass: 1, tension: 230, friction: 20 }
  });

  const modProps = useSpring({
    to: {
      opacity: open ? '1' : '0',
      display: open ? 'flex' : 'none'
    },
    from: {...modStyle},
    config: { mass: 1, tension: 180, friction: 20 }
  })

  return (
    <animated.div style={modProps}>
      <animated.div style={contentProps}>
        <ConfirmText className="fontMed">Are you sure you want to delete {name}?</ConfirmText>
        <Buttons>
          <YesButton className="fontMed" onClick={() => deleteContact()}>
            Yes
          </YesButton>
          <CloseButton className="fontMed" onClick={() => dispatch(setModal(''))}>
            Close
          </CloseButton>
        </Buttons>
      </animated.div>
    </animated.div>
  )
};

const contentStyle = {
  alignItems: 'center',
  background: 'white',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  height: '130px',
  justifyContent: 'space-between',
  marginBottom: '-100px',
  padding: '30px 20px 30px 20px',
  width: '500px',
};
const modStyle = {
  background: 'rgba(0, 0, 0, 0.4)',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  position: 'fixed',
  width: '100vw',
};

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`
const CloseButton = styled.div`
  align-items: center;
  background: rgb(171, 166, 22);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100px;
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
const ConfirmText = styled.div`
  font-size: 20px;
  textAlign: center;
`
const YesButton = styled.div`
  align-items: center;
  background: linear-gradient(180deg, #303AE4 0%, #050BC4 100%);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100px;
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


export default Modal;