import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../redux/modal.js';
import { setContacts } from '../../redux/contacts.js';
import { flexBetween, BlueBtn, YellowBtn } from '../globalComponents.js';

const Modal = () => {
  const { open, id, name, email } = useSelector(state => state.modal);
  const { contacts } = useSelector(state => state.contact);
  const dispatch = useDispatch();

  const deleteContact = () => {
    const data = JSON.parse(localStorage.getItem('contacts'));
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        data.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(data));
        dispatch(setModal(''));
        dispatch(setContacts(data));
        break;
      }
    }
  };

  const contentProps = useSpring({
    marginBottom: open ? '0px' : '-100px',
    config: { mass: 1, tension: 230, friction: 20 }
  });

  const modProps = useSpring({
    opacity: open ? '1' : '0',
    display: open ? 'flex' : 'none',
    config: { mass: 1, tension: 180, friction: 20 }
  });

  return (
    <Mod style={modProps}>
      <Content style={contentProps}>
        <ConfirmText className="fontMed">Are you sure you want to delete {name}?</ConfirmText>
        <Buttons>
          <BlueBtn className="fontMed" onClick={() => deleteContact()}>
            Yes
          </BlueBtn>
          <YellowBtn className="fontMed" onClick={() => dispatch(setModal(''))}>
            Close
          </YellowBtn>
        </Buttons>
      </Content>
    </Mod>
  )
};

const Buttons = styled.div`
  ${flexBetween};
  width: 230px;
`
const ConfirmText = styled.div`
  font-size: 20px;
  text-align: center;
  @media (max-width: 1000px) {
    font-soze: 12px;
  }
`
const Content = styled(animated.div)`
  ${flexBetween};
  align-items: center;
  background: white;
  border-radius: 8px;
  flex-direction: column;
  height: 110px;
  margin-bottom: -100px;
  padding: 30px 20px 30px 20px;
  width: 500px;
  @media (max-width: 1000px) {
    height: 150px;
    width: 300px;
  }
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