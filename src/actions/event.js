import * as Events from '../reducers/events';
import {fetchStackEvents} from '../apis/event';

export const getStackEvents = () => dispatch => {
    return fetchStackEvents()
        .then(res => {
            dispatch({
                type: Events.GET_STACK_EVENTS_SUCCESS,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: Events.GET_STACK_EVENTS_FAILURE,
                payload: err
            });
        });
}