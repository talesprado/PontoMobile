import {LOGIN, LOGOUT} from './actionTypes';

export const login = (cartaoInformado, senhaInformada) => {
    return {
        type: LOGIN,
        cartao: cartaoInformado,
        senha: senhaInformada
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    }
}