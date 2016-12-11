export const GET_CLUSTERS = "GET_CLUSTERS";
export const GET_CLUSTERS_SUCCESS = "GET_CLUSTERS_SUCCESS";
export const GET_CLUSTERS_FAILURE = "GET_CLUSTERS_SUCCESS";
export const GET_CLUSTER_DETAIL_SUCCESS = "GET_CLUSTER_DETAIL_SUCCESS";
export const GET_CLUSTER_DETAIL_FAILURE = "GET_CLUSTER_DETAIL_FAILURE";
export const POST_CLUSTER = "POST_CLUSTER";
export const POST_CLUSTER_SUCCESS = "POST_CLUSTER_SUCCESS";
export const POST_CLUSTER_FAILURE = "POST_CLUSTER_FAILURE";
export const PUT_CLUSTER = "PUT_CLUSTER";
export const PUT_CLUSTER_SUCCESS = "PUT_CLUSTER_SUCCESS";
export const PUT_CLUSTER_FAILURE = "PUT_CLUSTER_FAILURE";
export const RESET_POST_CLUSTERS = "RESET_POST_CLUSTERS";
export const DELETE_CLUSTER_SUCCESS = "DELETE_CLUSTER_SUCCESS";
export const DELETE_CLUSTER_FAILURE = "DELETE_CLUSTER_FAILURE";
export const SEARCHING_CLUSTERS = "SEARCHING_CLUSTERS";

const initClusterState = {
    clusters: {
        count:0,
        items:[]
    },
    displayedClusters: {
        count:0,
        items:[]
    },
    cluster:{},
    error: null,
    isCreating: false,
    isCreateSuccess: false,
};

const clusterReducer = (state = initClusterState, action) => {
    switch (action.type) {
        case GET_CLUSTERS:
            return {
                ...state,
                error: null
            };

        case GET_CLUSTERS_SUCCESS:
            return {
                ...state,
                clusters: action.payload,
                displayedClusters: action.payload,
                error: null
            };

        case GET_CLUSTERS_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case GET_CLUSTER_DETAIL_SUCCESS:
            return {
                ...state,
                cluster: action.payload,
                error: null
            };

        case GET_CLUSTER_DETAIL_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        
        case POST_CLUSTER:
            return {
                ...state,
                isCreating: true
            };
        
        case POST_CLUSTER_SUCCESS:
            return {
                ...state,
                isCreateSuccess: true,
                isCreating: false,
            };

        case POST_CLUSTER_FAILURE:
            return {
                ...state,
                isCreateSuccess: false,
                isCreating: false,
                error: action.payload
            };

        case PUT_CLUSTER:
            return {
                ...state,
                isCreating: true
            };

        case PUT_CLUSTER_SUCCESS:
            return {
                ...state,
                isCreateSuccess: true,
                isCreating: false,
            };

        case PUT_CLUSTER_FAILURE:
            return {
                ...state,
                isCreateSuccess: false,
                isCreating: false,
                error: action.payload
            };
        
        case RESET_POST_CLUSTERS:
            return {
                ...state,
                isCreateSuccess:false
            };
        
        case DELETE_CLUSTER_SUCCESS:
            return {
                ...state,
                clusters: {
                    items: state.clusters.items.filter(cluster => cluster.id !== action.id),
                    count: state.clusters.count
                },
                displayedClusters: {
                    items: state.displayedClusters.items.filter(cluster => cluster.id !== action.id),
                    count: state.clusters.count
                }
            };
        
        case DELETE_CLUSTER_FAILURE:
            return state;

        case SEARCHING_CLUSTERS:
            return {
                ...state,
                displayedClusters:{
                    count: state.clusters.count,
                    items: state.clusters.items.filter((cluster => cluster.name.indexOf(action.searchContent) !== -1))
                }
            };

        default:
            return state;
    }
};

export default clusterReducer;