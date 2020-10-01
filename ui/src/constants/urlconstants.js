import {config} from './baseurlconfig';
import {LOGIN,LOGIN_URL} from './urlstringconstants';

let urlMap = new Map();

urlMap.set(LOGIN, LOGIN_URL);

export const getURL = (urlKey) =>{
    return config.BASE_URL + urlMap.get(urlKey);
}