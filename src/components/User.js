import React from 'react';
import styled from 'styled-components';
import { Dot } from '../theme/theme';

const Card = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 8px auto;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.color.primary};
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 4px;
`;

const DotContainer = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeStamp = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #e0e0e0;
  margin-bottom: 4px;
`;

const Value = styled(TimeStamp)``;

const formatDate = dateText => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };
  const date = new Date(dateText);
  return date.toLocaleString('en-US', options);
};

const User = props => {
  const { id, last_login: lastLogin, username, is_active: isActive, date_joined: dateJoined } = props;
  return (
    <Card>
      <Row>
        <Name>{username}</Name>
        <DotContainer>{isActive ? <Dot /> : false}</DotContainer>
      </Row>
      <Value>id: {id}</Value>
      <Row>
        <Value>Last login: </Value>
        <TimeStamp>{formatDate(lastLogin)}</TimeStamp>
      </Row>
      <Row>
        <Value>Date joined: </Value>
        <TimeStamp>{formatDate(dateJoined)}</TimeStamp>
      </Row>
    </Card>
  );
};

export default User;
