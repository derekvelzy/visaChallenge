import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setModal } from '../../redux/modal.js';
import { setContacts } from '../../redux/contacts.js';
import { BlueButton, YellowButton } from '../globalComponents.js';

const Modal = () => {
  const { open, name, email } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const deleteContact = () => {
    axios.delete('http://localhost:8000/delete', { data: {email} })
    .then(() => {
      axios.get('http://localhost:8000/get')
      .then((res) => {
        dispatch(setContacts(res.data));
        dispatch(setModal(''));
      })
      .catch((e) => { alert('Error getting contacts', e)});
    })
    .catch((e) => { alert('Error deleting contact', e) });
  };

  const contentProps = useSpring({
    to: { marginBottom: open ? '0px' : '-100px' },
    from: {},
    config: { mass: 1, tension: 230, friction: 20 }
  });

  const modProps = useSpring({
    to: {
      opacity: open ? '1' : '0',
      display: open ? 'flex' : 'none'
    },
    from: {},
    config: { mass: 1, tension: 180, friction: 20 }
  })

  return (
    <Mod style={modProps}>
      <Content style={contentProps}>
        <ConfirmText className="fontMed">Are you sure you want to delete {name}?</ConfirmText>
        <Buttons>
          <BlueButton className="fontMed" onClick={() => deleteContact()}>
            Yes
          </BlueButton>
          <YellowButton className="fontMed" onClick={() => dispatch(setModal(''))}>
            Close
          </YellowButton>
        </Buttons>
      </Content>
    </Mod>
  )
};

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`
const ConfirmText = styled.div`
  font-size: 20px;
  textAlign: center;
`
const Content = styled(animated.div)`
  align-items: center;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: space-between;
  margin-bottom: -100px;
  padding: 30px 20px 30px 20px;
  width: 500px;
`
const Mod = styled(animated.div)`
  background: rgba(0, 0, 0, 0.4);
  display: none;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  width: 100vw;
`

export default Modal;