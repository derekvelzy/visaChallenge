import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { boxStyling } from '../globalComponents.js';

const Create = () => (
  <Link to='/create'>
    <CreateButton className="fontMed">Create New Contact +</CreateButton>
  </Link>
);

const CreateButton = styled.button`
  ${boxStyling};
  background: linear-gradient(180deg, #303AE4 0%, #050BC4 100%);
  color: white;
  cursor: pointer;
  font-size: 20px;
  height: 50px;
  margin-left: 5vw;
  margin-top: 30px;
  width: 40vw;
  &:hover {
    background: #303AE4;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.4);
  }
  &:active {
    background: #050BC4;
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1000px) {
    margin-left: 0vw;
    width: 80vw;
  }
`

export default Create;