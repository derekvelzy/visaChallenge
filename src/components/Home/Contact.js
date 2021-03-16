import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setCard } from '../../redux/card.js';
import { setModal } from '../../redux/modal.js';
import { setContact } from '../../redux/edits.js';

const Contact = ({ id, first, last, number, email }) => {
  const { selectedEmail, lastEmail } = useSelector(state => state.card);
  const dispatch = useDispatch();
  const history = useHistory();

  const editContact = () => {
    dispatch(setContact({id, first, last, phone: number, email}));
    history.push('/edit');
  }

  const openProps = useSpring({
    to: [
      {
        marginBottom: "0px",  // Reset 0 margin for same height cards
        height: "80px", // Reduces all cards to the same height
        flexDirection: 'row', // Set card formatting back to row
        justifyContent: lastEmail === email ? "center" : "flex-start", // keep content center if last email
      },
      {
        // Slides the last card to the left AND animates selected card slighly as to not move yet
        marginLeft: "0vw",
        width: "40vw", // Sets all cards back to the same width
        justifyContent: "flex-start", // Set all cards back to justify start
        flexDirection: 'row', // Set all cards back to row
      },
      {
        marginLeft: selectedEmail === email ? "42vw" : "0vw", // Slide newly selected card to the right
        width: selectedEmail === email ? "48vw" : "40vw", // Increase size of the newly selected card
        cursor: selectedEmail === email ? "auto" : "pointer", // Auto pointer for detailed card
        justifyContent: selectedEmail === email ? "center" : "flex-start", // justify items to center
      },
      {
        // Simultaneously decrease the margin and increase the height of the new card
        marginBottom: selectedEmail === email ? "-505px" : "0px",
        height: selectedEmail === email ? "470px" : "80px",
        flexDirection: selectedEmail === email ? "column" : "row",
        justifyContent: "flex-start", // justify items to center
      },
    ],
    from: {...containerStyle},
    config: { mass: 1, tension: 230, friction: 20 }
  });

  const picProps = useSpring({
    to: [
      { height: "49.5px", width: "49.5px"},
      {
        height: selectedEmail === email ? "120px" : "50px",
        width: selectedEmail === email ? "120px" : "50px",
        margin: selectedEmail === email ? "20px 30px 20px 30px" : "0px 30px 0px 30px",
      },
    ],
    from: {...picStyle},
    config: { mass: 1, tension: 230, friction: 20 }
  });

  const infoProps = useSpring({
    to: { alignItems: selectedEmail === email ? "center" : "flex-start" },
    from: {...infoStyle},
    config: { mass: 1, tension: 250, friction: 20 },
    delay: 100
  });

  const nameProps = useSpring({
    to: {
      marginBottom: selectedEmail === email ? "20px" : "8px",
      fontSize: selectedEmail === email ? "28px" : "20px"
     },
    from: {...nameStyle},
    config: { mass: 1, tension: 250, friction: 20 },
    delay: lastEmail === email ? 0 : 600
  });

  const numProps = useSpring({
    to: {
      fontSize: selectedEmail === email ? "22px" : "16px",
      marginBottom: selectedEmail === email ? "20px" : "0px",
    },
    from: {...numStyle},
    config: { mass: 1, tension: 250, friction: 20 },
    delay: lastEmail === email ? 0 : 600
  });

  const visProps = useSpring({
    to: { display: selectedEmail === email ? 'flex' : 'none' },
    from: { display: 'none' },
    config: { mass: 1, tension: 250, friction: 20 },
    delay: lastEmail === email ? 0 : 700
  });

  return (
    <animated.div
      onClick={() => {
        if (selectedEmail !== email) dispatch(setCard(email))
      }}
      style={openProps}
      className="card"
    >
      <animated.div style={{...visProps, alignSelf: 'flex-end', marginRight: '15px', marginTop: '15px'}}>
        <FontAwesomeIcon
          onClick={() => {
            if (selectedEmail === email) dispatch(setCard(''))
          }}
          icon={faTimesCircle}
          style={closeStyle}
          id="faTimes"
        />
      </animated.div>
      <animated.div style={picProps} />
      <animated.div style={infoProps}>
        <animated.div style={nameProps} className="fontMed">{first} {last}</animated.div>
        <animated.div style={numProps} className="fontReg">{number}</animated.div>
        <animated.div style={visProps} className="fontReg">{email}</animated.div>
        <animated.div style={visProps}>
          <EditButton onClick={editContact}>Edit</EditButton>
        </animated.div>
        <animated.div style={visProps}>
          <DeleteButton
            onClick={() => dispatch(setModal({name: `${first} ${last}`, email}))}
          >Delete</DeleteButton>
        </animated.div>
      </animated.div>
    </animated.div>
  )
};

const closeStyle = {
  // background: 'white',
  // borderRadius: '50%',
  color: '#303AE4',
  cursor: 'pointer',
  height: '30px',
  marginBottom: '-60px',
  width: '30px',
  transition: 'all 0.3s ease',
}
const containerStyle = {
  cursor: 'pointer',
  alignItems: 'center',
  background: 'white',
  borderRadius: '5px',
  display: 'flex',
  height: '80px',
  marginLeft: "0vw",
  marginRight: "60px",
  marginTop: '35px',
  width: '40vw',
  zIndex: 0,
};
const infoStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};
const nameStyle = {
  fontSize: '20px',
  marginBottom: '8px',
};
const numStyle = {
  fontSize: '16px'
};
const picStyle = {
  background: 'rgb(200, 200, 200)',
  borderRadius: '50%',
  height: '50px',
  margin: '0px 30px 0px 30px',
  width: '50px'
};

const DeleteButton = styled.button`
  background: rgb(171, 166, 22);
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  height: 40px;
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
const EditButton = styled.button`
  background: linear-gradient(180deg, #303AE4 0%, #050BC4 100%);
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  height: 40px;
  margin: 40px 0px 20px 0px;
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

export default Contact;