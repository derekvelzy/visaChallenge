import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCard } from '../../redux/card.js';
import { setModal } from '../../redux/modal.js';
import { setContact } from '../../redux/edits.js';
import { BlueButton, YellowButton } from '../globalComponents.js';

const Contact = ({ id, first, last, number, email }) => {
  const { selectedEmail, lastEmail } = useSelector(state => state.card);
  const dispatch = useDispatch();
  const history = useHistory();

  const editContact = () => {
    dispatch(setContact({id, first, last, number, email}));
    history.push('/edit');
  };

  const seCondition = selectedEmail === email;
  const leCondition = lastEmail === email;

  const openProps = useSpring({
    to: [
      {
        marginBottom: '0px',  // Reset 0 margin for same height cards
        height: '80px', // Reduces all cards to the same height
        flexDirection: 'row', // Set card formatting back to row
        justifyContent: leCondition ? 'center' : 'flex-start', // keep content center if last email
      },
      {
        marginLeft: '0vw', // Slides the last card to the left
        width: '40vw', // Sets all cards back to the same width
        justifyContent: 'flex-start', // Set all cards back to justify start
        flexDirection: 'row', // Set all cards back to row
      },
      {
        marginLeft: seCondition ? '42vw' : '0vw', // Slide newly selected card to the right
        width: seCondition ? '48vw' : '40vw', // Increase size of the newly selected card
        cursor: seCondition ? 'auto' : 'pointer', // Auto pointer for detailed card
        justifyContent: seCondition ? 'center' : 'flex-start', // justify items to center
      },
      {
        marginBottom: seCondition ? '-505px' : '0px', // Decrease margin
        height: seCondition ? '470px' : '80px', // Increase height of the new card
        flexDirection: seCondition ? 'column' : 'row',
        justifyContent: 'flex-start', // justify items to center
      },
    ],
    from: {...containerStyle},
    config: { mass: 1, tension: 230, friction: 20 }
  });

  const picProps = useSpring({
    to: [
      { height: '49.5px', width: '49.5px'},
      {
        height: seCondition ? '120px' : '50px',
        width: seCondition ? '120px' : '50px',
        margin: seCondition ? '20px 30px 20px 30px' : '0px 30px 0px 30px',
      },
    ],
    from: {...picStyle},
    config: { mass: 1, tension: 230, friction: 20 }
  });

  const infoProps = useSpring({
    alignItems: seCondition ? 'center' : 'flex-start',
    from: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
    delay: 100
  });

  const nameProps = useSpring({
    marginBottom: seCondition ? '20px' : '8px',
    fontSize: seCondition ? '28px' : '20px',
    from: { fontSize: '20px', marginBottom: '8px' },
    config: { mass: 1, tension: 250, friction: 20 },
    delay: leCondition ? 0 : 600
  });

  const numProps = useSpring({
    fontSize: seCondition ? '22px' : '16px',
    marginBottom: seCondition ? '20px' : '0px',
    from: { fontSize: '16px' },
    config: { mass: 1, tension: 250, friction: 20 },
    delay: leCondition ? 0 : 600
  });

  const visProps = useSpring({
    display: seCondition ? 'flex' : 'none',
    from: { display: 'none' },
    delay: leCondition ? 0 : 700
  });

  return (
    <animated.div
      onClick={() => { if (selectedEmail !== email) dispatch(setCard(email)) }}
      style={openProps}
      className='card'
    >
      <animated.div style={{...visProps, ...iconStyle}}>
        <FontAwesomeIcon
          onClick={() => { if (selectedEmail === email) dispatch(setCard('')) }}
          icon={faTimesCircle}
          id='faTimes'
        />
      </animated.div>
      <animated.div style={picProps} />
      <animated.div style={infoProps}>
        <animated.div style={nameProps} className='fontMed'>{first} {last}</animated.div>
        <animated.div style={numProps} className='fontReg'>{number}</animated.div>
        <animated.div style={visProps} className='fontReg'>{email}</animated.div>
        <animated.div style={visProps}>
          <BlueButton onClick={editContact} style={{ margin: '40px 0px 20px 0px' }}>
            Edit
          </BlueButton>
        </animated.div>
        <animated.div style={visProps}>
          <YellowButton onClick={() => dispatch(setModal({name: `${first} ${last}`, email}))}>
            Delete
          </YellowButton>
        </animated.div>
      </animated.div>
    </animated.div>
  )
};

const containerStyle = {
  cursor: 'pointer',
  alignItems: 'center',
  background: 'white',
  borderRadius: '5px',
  display: 'flex',
  height: '80px',
  marginLeft: '0vw',
  marginRight: '60px',
  marginTop: '35px',
  width: '40vw',
  zIndex: 0,
};
const iconStyle = {
  alignSelf: 'flex-end',
  marginRight: '15px',
  marginTop: '15px'
};
const picStyle = {
  background: 'rgb(200, 200, 200)',
  borderRadius: '50%',
  height: '50px',
  margin: '0px 30px 0px 30px',
  width: '50px',
};

export default Contact;