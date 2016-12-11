export const GET_STACK_EVENTS_SUCCESS = 'GET_STACK_EVENTS';
export const GET_STACK_EVENTS_FAILURE = 'GET_STACK_EVENTS_FAILURE';

const initEventState = {
    eventList:[]
};

const events = (state = initEventState, action) => {
    switch (action.type){
        case GET_STACK_EVENTS_SUCCESS:
            return{
                ...state,
                eventList: action.payload
            };
        case GET_STACK_EVENTS_FAILURE:
            return{
                ...state,
                eventList: []
            };
        default:
           return state;
    };
};

export default events;


