import * as Applications from '../reducers/applications';
import {fetchApplications, postApplication,fetchApplicationDetail,putApplicationStack } from '../apis/application';
import {openSnackbar} from './snackbar';

export const getApplications = (page, perPage) => dispatch => {
    return fetchApplications(page, perPage)
        .then(res => {
            dispatch({
                type: Applications.GET_APPLICATIONS_SUCCESS,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: Applications.GET_APPLICATIONS_FAILURE,
                payload: err
            });
        });
};

export const createApplication = (value) => dispatch => {
    return postApplication(value)
        .then((res) => {
            dispatch({
                type: Applications.CREATE_APPLICATION_SUCCESS,
                payload: res
            });
            dispatch(openSnackbar('application created'));
        },
            (err) => {
                dispatch({
                    type:Applications.CREATE_APPLICATION_FAILURE,
                    payload: err
                });
            })
        .catch((err) => {
            dispatch({
                type:Applications.CREATE_APPLICATION_FAILURE,
                payload: err
            });
        return Promise.reject({_error: 'Can not create application' });
        });
};

export const getApplicationDetail = (appName) => dispatch => (
    fetchApplicationDetail(appName)
        .then(res =>{
            dispatch({
                type:Applications.GET_APPLICATION_DETAIL_SUCCESS,
                payload:res
            });
        })
        .catch( err => {
            dispatch({
                type:Applications.GET_APPLICATION_DETAIL_FAILURE,
                payload: err
            });
            return Promise.reject({_error: 'Can not get application ' + appName + 'detail' });
        })
);

export const resetOperate = () => dispatch =>{
    dispatch({
        type:Applications.RESET_OPERATE
    });
};

export const updateApplication = (appName, value) => dispatch => {
    putApplicationStack(appName, value)
        .then((res) => {
            dispatch({
                type:Applications.UPDATE_APPLICATION_SUCCESS,
                payload:res
            });
            dispatch(openSnackbar('application updated'));
        })
        .catch((err) => {
            dispatch({
                type:Applications.UPDATE_APPLICATION_FAILURE,
                payload:err
            });
        });
};



