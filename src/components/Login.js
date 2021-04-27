import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as api from '../api/api';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  margin-top: 64px;
  padding: 0 8px;
`;

const Input = styled.input`
  width: 100%;
`;
const Button = styled.button`
  position: relative;
  width: 70%;
  :disabled {
    background-color: gray;
    cursor: not-allowed;
    :hover {
      ::after {
        content: 'min length password and username one symbol';
        position: absolute;
        left: 0;
        top: calc(100% + 4px);
        width: 100%;
        background: white;
        color: black;
        border-radius: ${({ theme }) => theme.borderRadius};
      }
    }
  }
`;
const Alert = styled.p`
  color: ${({ theme }) => theme.color.contrast};
`;

const Login = ({ loginHandler, isLogined }) => {
  const history = useHistory();
  const [username, setUsername] = useState('cool_user');
  const [password, setPassword] = useState('InsanePassword');
  const [errorLogin, setErrorLogin] = useState(false);

  const buttonHandler = () => {
    api
      .getToken(username, password)
      .then(() => loginHandler(true))
      .catch(() => setErrorLogin(true));
  };
  useEffect(() => {
    if (isLogined) {
      history.push('/users');
    }
  }, [isLogined]);

  return (
    <Container>
      <Input
        value={username}
        onChange={e => {
          setUsername(e.target.value);
          setErrorLogin(false);
        }}
        id='username'
        type='text'
        placeholder='Username'
        autoComplete='username'
      />
      <Input
        value={password}
        onChange={e => {
          setPassword(e.target.value);
          setErrorLogin(false);
        }}
        id='current-password'
        type='password'
        placeholder='Password'
        autoComplete='current-password'
      />
      <Button disabled={!username || !password} onClick={buttonHandler}>
        Login
      </Button>
      {errorLogin ? <Alert>Wrong Username or Password</Alert> : null}
    </Container>
  );
};

export default Login;
