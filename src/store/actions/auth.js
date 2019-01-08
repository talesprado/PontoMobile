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
    const scope = 'meus-os';    
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
    AsyncStorage.setItem("pm:auth:access_token", token.access_token);    
    AsyncStorage.setItem("pm:auth:expires_in", token.expires_in);
  }
}

export const authSetToken = (access_token, expires_in) => {  
  return {
    type: AUTH_SET_TOKEN,
    access_token: access_token,
    expires_in: expires_in
  }
}

export const authGetToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const access_token = getState().auth.access_token;      
      if(!access_token){
        AsyncStorage.getItem("pm:auth:access_token")
        .catch(err => reject())
        .then(tokenFromStorage => {   
          console.log(tokenFromStorage)       
          if(!tokenFromStorage){            
            NavigationService.navigate('Auth');             
            return;
          }
          dispatch(authSetToken(tokenFromStorage));
          resolve(tokenFromStorage);
        });        
      }else{
        resolve(token);
      }
    });
    return promise;
  };
}

export const authAutoSignIn = () => {
  return dispatch => {
    dispatch(authGetToken())    
    .then(token => {      
      NavigationService.navigate('App'); 
      return;
    })
    .catch(err => {
      console.log(err)
    });    
  }
}

export const authClearStorage = () => {
  return dispatch => {
    return AsyncStorage.removeItem("pm:auth:access_token");    
  }
}

export const authLogout = () => {
  return dispatch => {
    dispatch(authClearStorage()).then(() => {
      NavigationService.navigate('Auth');
    });
  };
};

