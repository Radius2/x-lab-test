import React, { useEffect } from 'react';
import styled from 'styled-components';
import Login from './components/Login';
import Users from './components/Users';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

const Root = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 8px;
`;

function App() {
  const [isLogined, setIsLogined] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!isLogined) {
      history.push('/');
    }
  }, [isLogined]);

  return (
    <Root>
      <Switch>
        <Route path='/' exact>
          <Login isLogined={isLogined} loginHandler={logined => setIsLogined(logined)} />
        </Route>
        <Route path='/users'>
          <Users loginHandler={logined => setIsLogined(logined)} />
        </Route>
        <Redirect to='/users' />
      </Switch>
    </Root>
  );
}

export default App;
