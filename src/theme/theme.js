import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const theme = {
  color: {
    primary: '#373741',
    secondary: '#424250',
    contrast: 'orange',
    text: '#FFFFF0',
  },
  borderRadius: '4px',
};

export const GlobalStyle = createGlobalStyle`
* {
  margin : 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  color: ${theme.color.text};    
}
body {
  background: ${theme.color.secondary};
}
button {
  margin-top: 16px;
  margin-bottom: 8px;
  border-radius: ${theme.borderRadius};
  background: black;
  padding: 12px 16px;
  font-size: 14px;
  text-transform: uppercase;
  border:none; 
  cursor: pointer;
}
button:active, button:focus {
  outline: none;
  border: none;
}
input {
  outline: none;
  border: none;
  border-radius: ${theme.borderRadius};
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
  background: ${theme.color.text};
  color: ${theme.color.primary};
  font-size: 16px;
  font-weight: 700px;
}
input:active, input:focus {
    outline: none;
    border: none;
}`;

const pulse = keyframes`
0% {
      opacity: 1;
      transform: scale(1);
  }
  80% {
      opacity: 0;
      transform: scale(2.5);
  }
  100% {
      opacity: 0;
      transform: scale(3);
  }
`;

const pulse2 = keyframes`
0% {
      opacity: 1;
      transform: scale(1);
  }
  30% {
      opacity: 1;
      transform: scale(1);
  }
  100% {
      opacity: 0;
      transform: scale(2.5);
  }
`;

export const Dot = styled.div`
  position: relative;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #06d6a0;
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: #06d6a0;
    display: block;
    animation: ${pulse} 2s ease 0s infinite;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: #06d6a0;
    display: block;
    animation: ${pulse2} 2s ease 0s infinite;
  }
`;


