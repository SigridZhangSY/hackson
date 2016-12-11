import * as Stack from '../reducers/stacks'
import {fetchStacks, fetchStackDetail} from '../apis/stack';
import {pagination} from '../apis/index';

export const getStacks = (page, perPage) => dispatch => {
    return fetchStacks()
        .then(res => {
            let list = res.filter((item => item.status !== 'UNPUBLISHED'));
            res = pagination(list, page, perPage);
            const data = {
                items: res,
                count: list.length
            };
            dispatch({
                type: Stack.GET_STACKS_SUCCESS,
                payload: data

            });
        })
        .catch(err => {
            dispatch({
                type: Stack.GET_STACKS_FAILURE,
                payload: err
            });
        });
};

export const getAllStacks = () => dispatch => {
  return fetchStacks()
      .then(res => {
          let list = res.filter((item => item.status !== 'UNPUBLISHED'));
          const data = {
              items: list,
              count: list.length
          };
          dispatch({
              type: Stack.GET_STACKS_SUCCESS,
              payload: data

          });
      })
      .catch(err => {
          dispatch({
              type: Stack.GET_STACKS_FAILURE,
              payload: err
          });
      });
};

export const selectStack = (stack) => {
    return (
    {
        type: Stack.SELECT_STACK_TO_CREATE_APP,
        payload: stack
    });
};

export const resetSelectedStack = () => dispatch => {
    dispatch({
        type: Stack.RESET_SELECTED_STACK
    });
};

export const getStackDetail = (stackId) => dispatch => {
    return fetchStackDetail(stackId)
        .then(res => {
            dispatch({
                type: Stack.GET_STACK_DETAIL_SUCCESS,
                payload: res
            });
        })
        .catch(err => {
            dispatch({
                type: Stack.GET_STACK_DETAIL_FAILURE,
                payload: err
            });
        });
};
