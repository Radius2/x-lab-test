import axios from 'axios';

const USER = {
  password: 'InsanePassword',
  username: 'cool_user',
};

const api = axios.create({
  baseURL: 'https://agile-garden-50413.herokuapp.com/api',
});

const setToken = token => {
  api.defaults.headers.common['Authorization'] = 'Token ' + token;
};

export const getToken = (username, password) => {
  return api
    .post('/token/login/', {
      password: password,
      username: username,
    })
    .then(({ data }) => setToken(data.auth_token));
};

export const logout = () => {
  return api.post('/token/logout/', {}).then(()=>setToken(''));
};



export const getUsers = () => {
  return api.get('/users/');
};
