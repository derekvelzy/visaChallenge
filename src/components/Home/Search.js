import React from 'react';
import styled from 'styled-components'

const Search = () => {
  return (
    <Container>
      <SearchBar
        placeholder="Search..."
      />
      <CreateButton className="fontMed">Create New Contact</CreateButton>
    </Container>
  )
};

const Container = styled.div`
  margin-top: 100px;
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
  transition: all 0.2s ease;
  width: 24vw;
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
const SearchBar = styled.input`
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.2);
  height: 40px;
  padding-left: 20px;
  width: 64vw;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    box-shadow: 0px 2px 12px 5px rgba(0, 0, 0, 0.24);
  }
`

export default Search;