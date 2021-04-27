import React from 'react';
import styled from 'styled-components';

const SearchRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 58px;
  padding: 0 5px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  & > * {
    margin: 0 5px;
  }
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 300px;
  text-transform: uppercase;
  flex-shrink: 0;
  flex-grow: 1;
`;

const Input = styled.input`
  margin: 0;
  height: 32px;
  width: 100%;
  max-width: 350px;
  min-width: 0;
  flex-basis: 120;
`;

const Button = styled.button`
  padding: 0;
  background: transparent;
`;

const Filter = props => {
  return (
    <SearchRow>
      <Name>Users</Name>
      <Input value={props.searchFilter} onChange={e => props.searchFilterHandler(e.target.value)} type='search' placeholder='Search...' />
      <Button onClick={props.sortDirectionHandler}>
        {props.sortDirectionUp ? (
          <img src='https://img.icons8.com/fluent-systems-regular/32/000000/sort-numeric-up.png' alt='12' />
        ) : (
          <img src='https://img.icons8.com/fluent-systems-regular/32/000000/sort-numeric-up-reversed.png' alt='21' />
        )}
      </Button>
      <Button onClick={props.logoutHandler}>
        <img src='https://img.icons8.com/ios-glyphs/30/000000/exit.png' alt='logout' />
      </Button>
    </SearchRow>
  );
};
export default Filter;
