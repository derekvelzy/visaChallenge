import React from 'react';
import styled from 'styled-components'

const Create = () => {

  return (
    <Container>
      <CreateButton className="fontMed">Create New Contact +</CreateButton>
    </Container>
  )
};

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 90vw;
`
const CreateButton = styled.button`
  background: linear-gradient(180deg, #303AE4 0%, #050BC4 100%);
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.25);
  color: white;
  cursor: pointer;
  font-size: 20px;
  height: 50px;
  transition: all 0.2s ease;
  width: 40vw;
  &:hover {
    background: linear-gradient(180deg, #303AE4 0%, #303AE4 100%);
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.4);
  }
  &:active {
    background: linear-gradient(180deg, #050BC4 0%, #050BC4 100%);
    box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
  }
`

export default Create;