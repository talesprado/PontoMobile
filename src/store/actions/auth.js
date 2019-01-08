import {AsyncStorage} from 'react-native';
import {AUTH_SET_TOKEN} from './actionTypes';
import {uiStartLoading, uiStopLoading} from './index';
import NavigationService from './../../../NavigationService';

export const try_auth = (authData) => {
  return dispatch => {
    dispatch(uiStartLoading());
    const url = '';    
    const client_id = '';
    const client_secret = '';
    const grant_type = '';
    const scope = '';
    console.log(authData);
    fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({
          client_id: client_id,
          client_secret: client_secret,
          grant_type: grant_type,
          scope: scope,
          username: authData.cartao.value,
          password: authData.senha.value
        }),
        headers: {
          "Content-Type" : "application/json"
        }
      }
    ).catch(err => {
      alert("Não foi possível realizar o login");
    })
    .then(res => res.json())
    .then(parsedRes => {
      dispatch(uiStopLoading());
      if(parsedRes.success){
        dispatch(authStoreToken(parsedRes.data));
        NavigationService.navigate('App');  
      }else{
        alert(parsedRes.message);
      }      
    })
    
  };
};

export const authStoreToken = token => {
  return dispatch => {
    dispatch(authSetToken(token));
    AsyncStorage.setItem("pm:auth:token", token);    
  }
}

export const authSetToken = token => {  
  return {
    type: AUTH_SET_TOKEN,
    token: token
  }
}

export const authGetToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const token = getState().auth.token;
      if(!token.access_token){
        AsyncStorage.getItem("pm:auth:token")
        .catch(err => reject())
        .then(tokenFromStorage => {
          dispatch(authSetToken(tokenFromStorage));
          resolve(tokenFromStorage)
        });        
      }else{
        resolve(token);
      }
    });
    return promise;
  };
}

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

