import {LOGIN, LOGOUT, SET_USER, SET_PASS} from './actionTypes';

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const setUser = cartao => {
  return {
    type: SET_USER,
    cartao: cartao,
  };
};

export const setPass = senha => {
  return {
    type: SET_PASS,
    senha: senha,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
