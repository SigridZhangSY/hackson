export const GET_STACKS_SUCCESS = "GET_STACKS_SUCCESS";
export const GET_STACKS_FAILURE = "GET_STACKS_FAILURE";
export const GET_STACK_DETAIL_SUCCESS = "GET_STACK_DETAIL_SUCCESS";
export const GET_STACK_DETAIL_FAILURE = "GET_STACK_DETAIL_FAILURE";
export const SELECT_STACK_TO_CREATE_APP = "SELECT_STACK_TO_CREATE_APP";
export const RESET_SELECTED_STACK = "RESET_SELECTED_STACK";

const initStacksState = {
    data:{
        items: [],
        count: 0
    },
    curStack:{},
    stackDetail:{}
}

const stacks = (state = initStacksState, action) => {

    switch (action.type){
        case GET_STACKS_SUCCESS:
            return {
                ...state,
                data: action.payload
            };
        case GET_STACKS_FAILURE:
            return {
                ...state,
                data:{
                    items: [],
                    count: 0
                }
            };
        case GET_STACK_DETAIL_SUCCESS:
            return {
                ...state,
                stackDetail: action.payload
            };
        case GET_STACK_DETAIL_FAILURE:
            return {
                ...state,
                stackDetail: {}
            }
        case SELECT_STACK_TO_CREATE_APP:
            return {
                ...state,
                curStack: action.payload
            }
        case RESET_SELECTED_STACK:
            return{
                ...state,
                curStack:{}
            }
        default:
            return state
    }
}

export default stacks;