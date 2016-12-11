export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAIL = 'LOGIN_REQUEST_FAIL';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_REQUEST_SUCCESS = 'SIGNUP_REQUEST_SUCCESS';
export const SIGNUP_REQUEST_FAIL = 'SIGNUP_REQUEST_FAIL';

export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAIL = 'FETCH_CURRENT_USER_FAIL';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const GET_CURRENT_AUTH = 'GET_CURRENT_AUTH';


const initUserState = {
    isAuthenticating: false,
    isAuthenticated: false,
    isLoginFailed: false,
    isRegistering: false,
    isRegistered: false,
    isRegisterFailed: false,
    error: '',
    curUser:{
        email:''
    }
};

const session = (state = initUserState, action) => {
    switch (action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isAuthenticating: true
            };
        
        case LOGIN_REQUEST_SUCCESS:
            return{
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                isLoginFailed: false
            };
        
        case LOGIN_REQUEST_FAIL:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                error: action.payload,
                isLoginFailed: true
            };
        
        case SIGNUP_REQUEST:
            return {
                ...state,
                isRegistering: true
            };
        
        case SIGNUP_REQUEST_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isRegistered: true,
                isRegisterFailed: false
            };

        case SIGNUP_REQUEST_FAIL:
            return {
                ...state,
                isRegistering: false,
                isRegistered: false,
                isRegisterFailed: true,
                error: action.payload
            };

        case LOGOUT_REQUEST:
            return {
                ...state,
                isAuthenticated: false,
                curUser:{
                    email:''
                }
            };
        
        case FETCH_CURRENT_USER_SUCCESS:
            return{
                ...state,
                curUser:action.payload
            };
        case GET_CURRENT_AUTH:
            return{
                ...state,
                isAuthenticated: action.payload
            };
        default:
            return state;
    }
};

export default session;