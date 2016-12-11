import * as Session from '../reducers/session';
import {loginValidator, signUpValidator, fetchCurrentUser, fetchAuth} from '../apis/index';
import {readClusters} from './cluster';
import {getStacks} from './stack';
import {getApplications} from './application';

export const login = (email, password) => (dispatch) => {
    dispatch({
        type: Session.LOGIN_REQUEST
    });
    return loginValidator(email, password)
        .then((res) => {
                sessionStorage.setItem('id_token', res.token);

                dispatch(readClusters());
                dispatch(getStacks());
                dispatch(getApplications());
                dispatch(getCurrentUser());

                dispatch({
                    type: Session.LOGIN_REQUEST_SUCCESS,
                    id_token: res.token
                });
            },
            (err) => {
                dispatch({
                    type: Session.LOGIN_REQUEST_FAIL,
                    payload: err
                });
            }
        )
        .catch((err) => {
            dispatch({
                type: Session.LOGIN_REQUEST_FAIL,
                payload: err
            });
        })
};

export const logout = () => (dispatch) => {
    sessionStorage.removeItem('id_token');
    dispatch({
        type: Session.LOGOUT_REQUEST
    })
};

export const signUp = (email, password) => (dispatch) => {
    dispatch({
        type: Session.SIGNUP_REQUEST
    });
    return signUpValidator(email, password)
        .then((res) => {
                return loginValidator(email, password)
                    .then((res) => {
                        dispatch({
                            type: Session.LOGIN_REQUEST_SUCCESS,
                            id_token: res.token
                        });
                        sessionStorage.setItem('id_token', res.token);

                        dispatch(readClusters());
                        dispatch(getStacks());
                        dispatch(getApplications());
                        dispatch(getCurrentUser());
                        dispatch({
                            type: Session.SIGNUP_REQUEST_SUCCESS
                        })
                    })
            },
            (err) => {
                dispatch({
                    type: Session.SIGNUP_REQUEST_FAIL,
                    payload: err
                })
            }
        )
}

export const getAuth = () => (dispatch) => {
    dispatch({
        type: Session.GET_CURRENT_AUTH,
        payload: fetchAuth()
    });
}

export const getCurrentUser = () => (dispatch) => {
    return fetchCurrentUser().then((res) => {
        dispatch({
            type: Session.FETCH_CURRENT_USER_SUCCESS,
            payload: res
        });
        return Promise.resolve({});
    }, (err) => {
        dispatch({
            type: Session.FETCH_CURRENT_USER_FAIL,
            payload: err
        });
        return Promise.reject({_error: 'Can not get current user'});
    });
};