import {AUTH_SET_TOKEN} from './../actions/actionTypes';
import {AsyncStorage} from 'react-native';

const initialState = {
  token: {
    access_token: null,
    expires_in : null,
    token_type: null,
    scope: null,
    refresh_token: null
  }
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN: 
      return {
        ...state,        
        token: action.token 
      }

    default:
      return state;
  }
};

export default reducer;
