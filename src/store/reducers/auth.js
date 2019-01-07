import {LOGIN, LOGOUT, SET_PASS, SET_USER} from './../actions/actionTypes';

const initialState = {
  cartao: '',
  senha: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASS:
      return {
        ...state,
        senha: action.senha,
      };
    case SET_USER:
      return {
        ...state,
        cartao: action.cartao,
      };

    default:
      return state;
  }
};

export default reducer;
