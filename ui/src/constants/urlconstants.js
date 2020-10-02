import {config} from './baseurlconfig';
import {LOGIN,LOGIN_URL,REGISTER, REGISTER_URL} from './urlstringconstants';

let urlMap = new Map();

urlMap.set(LOGIN, LOGIN_URL);
urlMap.set(REGISTER, REGISTER_URL);

export const getURL = (urlKey) =>{
    return config.BASE_URL + urlMap.get(urlKey);
}