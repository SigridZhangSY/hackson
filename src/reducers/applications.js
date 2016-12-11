export const CREATE_APPLICATION_SUCCESS = 'CREATE_APPLICATION_SUCCESS';
export const CREATE_APPLICATION_FAILURE = 'CREATE_APPLICATION_FAILURE';
export const UPDATE_APPLICATION_SUCCESS = 'UPDATE_APPLICATION_SUCCESS';
export const UPDATE_APPLICATION_FAILURE = 'UPDATE_APPLICATION_FAILURE';
export const GET_APPLICATIONS_SUCCESS = "GET_APPLICATIONS_SUCCESS";
export const GET_APPLICATIONS_FAILURE = "GET_APPLICATIONS_FAILURE";
export const GET_APPLICATION_DETAIL_SUCCESS = "GET_APPLICATION_DETAIL_SUCCESS";
export const GET_APPLICATION_DETAIL_FAILURE = "GET_APPLICATION_DETAIL_FAILURE";
export const RESET_OPERATE = "RESET_OPERATE";

const initApplicationState = {
    isOperateSuccess:false,
    data:{
        count: 0,
        items: []
    },
    appDetail:{},
    isOperateFail:false
};

const applications = (state = initApplicationState, action) => {
    switch (action.type){
        case GET_APPLICATIONS_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case GET_APPLICATIONS_FAILURE:
            return {
                ...state,
                data:{
                    count: 0,
                    items: []
                }
            };
        case GET_APPLICATION_DETAIL_SUCCESS:
            return{
                ...state,
                appDetail: action.payload
            };
        case GET_APPLICATION_DETAIL_FAILURE:
            return{
                ...state,
                appDetail: {}
            };
        case CREATE_APPLICATION_SUCCESS:
            return{
                ...state,
                isOperateSuccess:true,
                isOperateFail:false
            };
        case UPDATE_APPLICATION_SUCCESS:
            return{
                ...state,
                isOperateSuccess:true,
                isOperateFail:false
            };

        case CREATE_APPLICATION_FAILURE:
            return{
                ...state,
                isOperateSuccess:false,
                isOperateFail:true
            };
        case UPDATE_APPLICATION_FAILURE:
            return{
                ...state,
                isOperateSuccess:false,
                isOperateFail:true
            };
        case RESET_OPERATE:
            return{
                ...state,
                isOperateSuccess:false,
                isOperateFail:false
            };
        default:
            return state;
    }
};

export default applications;



