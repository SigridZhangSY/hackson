import {getClusters, postCluster, putCluster, deleteCluster, fetchCluster} from '../apis/index';
import {openSnackbar} from './snackbar';
import {OPEN_SNACKBAR} from '../reducers/snackbar';
import * as Cluster from '../reducers/clustersReducer';

export const readClusters = (page, perPage) => dispatch => {
    dispatch({
        type: Cluster.GET_CLUSTERS
    });
    return getClusters(page, perPage)
        .then((res) => {
                dispatch({
                    type: Cluster.GET_CLUSTERS_SUCCESS,
                    payload: res
                })
            },
            (error) => {
                dispatch({
                    type: Cluster.GET_CLUSTERS_FAILURE,
                    payload: error
                })
            })
        .catch(error => {
            dispatch({
                type: Cluster.GET_CLUSTERS_FAILURE,
                payload: error
            })
        })
};

export const createCluster = (value) => dispatch => {
    dispatch({
        type: Cluster.POST_CLUSTER
    });
    return postCluster(value)
        .then(res => {
                dispatch({
                    type: Cluster.POST_CLUSTER_SUCCESS
                });
                dispatch(openSnackbar('cluster created'))
            },
            (error) => {
                dispatch({
                    type: Cluster.POST_CLUSTER_FAILURE,
                    payload: error
                })
            })
        .catch(error => {
            dispatch({
                type: Cluster.POST_CLUSTER_FAILURE,
                payload: error
            })
        })
};

export const updateCluster = (id, value) => dispatch => {
    dispatch({
        type: Cluster.PUT_CLUSTER
    });
    return putCluster(id, value)
        .then((res) => {
                dispatch({
                    type: Cluster.PUT_CLUSTER_SUCCESS
                });
                dispatch(openSnackbar('cluster updated'))

            },
            (error) => {
                dispatch({
                    type: Cluster.PUT_CLUSTER_FAILURE,
                    payload: error
                })
            })
        .catch(error => {
            dispatch({
                type: Cluster.PUT_CLUSTER_FAILURE,
                payload: error
            })
        })
};

export const resetCreateCluster = () => ({
    type: Cluster.RESET_POST_CLUSTERS
});

export const removeCluster = (id) => dispatch => {
    return deleteCluster(id)
        .then((res) => {
                dispatch({
                    type: Cluster.DELETE_CLUSTER_SUCCESS,
                    id: id
                });
                dispatch(openSnackbar('cluster deleted'))
            },
            (error) => {
                dispatch({
                    type: Cluster.DELETE_CLUSTER_FAILURE,
                    error: error
                })
            })
        .catch(error => {
            dispatch({
                type: Cluster.DELETE_CLUSTER_FAILURE,
                error: error
            })
        })
};

export const getClusterDetail = (id) => dispatch => {
    return fetchCluster(id)
        .then(res => {
                dispatch({
                    type: Cluster.GET_CLUSTER_DETAIL_SUCCESS,
                    payload: res
                });
            },
            (error) => {
                dispatch({
                    type: Cluster.GET_CLUSTER_DETAIL_FAILURE,
                    error: error
                })
            }
        )
        .catch((error) => {
            dispatch({
                type: Cluster.GET_CLUSTER_DETAIL_FAILURE,
                error: error
            })
        });
};