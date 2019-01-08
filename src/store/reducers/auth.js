import {AUTH_SET_TOKEN} from './../actions/actionTypes';
import {AsyncStorage} from 'react-native';

const initialState = {  
  access_token: null,
  expires_in : null,      
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN: 
      return {
        ...state,        
        access_token: action.access_token,
        expires_in: action.expires_in
      }
    default:
      return state;
  }
};

export default reducer;
