import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import User from './User';
import Filter from './Filter';
import * as api from '../api/api';

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Users = props => {
  const [users, setUsers] = useState([]);
  const [sortDirectionUp, setSortDirectionUp] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');

  const sortUp = (a, b) => a.id - b.id;
  const sortReverse = (a, b) => b.id - a.id;

  useEffect(() => {
    api.getUsers().then(({ data }) => setUsers(data.sort(sortDirectionUp ? sortUp : sortReverse)));
  }, []);

  useEffect(() => {
    setUsers(prev => [...prev.sort(sortDirectionUp ? sortUp : sortReverse)]);
  }, [sortDirectionUp]);

  const logoutHandler = () => {
    api.logout();
    props.loginHandler(false);
  };

  const sortedUsers = users?.filter(user => user.username.toLowerCase().includes(searchFilter.toLowerCase()));
  console.log(sortedUsers);

  return (
    <Column>
      <Filter
        sortDirectionUp={sortDirectionUp}
        sortDirectionHandler={() => {
          setSortDirectionUp(!sortDirectionUp);
        }}
        searchFilter={searchFilter}
        searchFilterHandler={value => setSearchFilter(value)}
        logoutHandler={logoutHandler}
      />
      {sortedUsers.length ? sortedUsers.map(user => <User key={user.id} {...user} />) : <Row>Not found</Row>}
    </Column>
  );
};

export default Users;
