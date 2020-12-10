import { BASE_URL, AUTH_TOKEN, NAME, ID } from "./env";

export const saveToken = (token) => {
    window.localStorage.setItem(AUTH_TOKEN, token);
};

export const saveUser = (user) => {

    window.localStorage.setItem(NAME, user.firstname + " " + user.lastname);
    window.localStorage.setItem(ID, user.id);
};



export const saveUserData = (data) => {
    // alert(id);
    saveToken(data.token);
    saveUser(data);

};

export const isValidToken = (token = this.getToken) => {
    return splitToken(token).iss === BASE_URL + 'api/v1/auth/login';
};

export const hasToken = (token) => {
    return isValidToken(token);
};

export const splitToken = (token) => {
    return JSON.parse(atob(token.split('.')[1]));
};

export const getToken = () => {
    return window.localStorage.getItem(AUTH_TOKEN);
};

export const getName = () => {
    // if (hasToken(getToken())) {
    return window.localStorage.getItem(NAME);
    // }
};

export const getId = () => {
    return window.localStorage.getItem(ID);
};

export const removeToken = () => {
    return window.localStorage.removeItem(AUTH_TOKEN);
};

export const removeUser = () => {
    window.localStorage.removeItem(NAME);
    window.localStorage.removeItem(ID);
};

export const logout = () => {
    removeToken();
    removeUser();
};