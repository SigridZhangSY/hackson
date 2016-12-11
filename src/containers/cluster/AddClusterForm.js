import React from 'react';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';

import ClusterCreation from '../../components/cluster/ClusterCreation';
import {createCluster, resetCreateCluster} from '../../actions/cluster';

class AddClusterForm extends React.Component {
    handleSubmit(value) {
        this.props.onCreateClick(value);
    };

    componentWillUpdate(nextProps) {
        if (nextProps.isCreateSuccess) {
            hashHistory.push({
                pathname: 'clusters',
                query: {
                    page: 1,
                    perPage: 10
                }
            });
        }
    }
    
    componentWillUnmount() {
        this.props.resetCreateCluster();
    }

    render() {
        return <ClusterCreation onSubmit={this.handleSubmit.bind(this)} {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isCreateSuccess: state.clusterReducer.isCreateSuccess,
        isCreating: state.clusterReducer.isCreating
    };
};

const mapDispatchToProps = (dispatch) => ({
    onCreateClick: (value) => {
        dispatch(createCluster(value))
    },
    resetCreateCluster: () => {
        dispatch(resetCreateCluster())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddClusterForm);

