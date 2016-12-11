import React from 'react';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';
import ClusterEdition from '../../components/cluster/ClusterEdition';
import {updateCluster, resetCreateCluster} from '../../actions/cluster';

class EditClusterForm extends React.Component {
    handleSubmit(value) {
        this.props.onUpdateClick(this.props.params.id, value);
    };

    componentWillUpdate(nextProps) {
        if (nextProps.isCreateSuccess) {
            hashHistory.push({
                pathname: 'clusters',
                query:{
                    page:1,
                    perPage:10
                }});
        } else {

        }
    }

    componentWillUnmount() {
        this.props.resetCreateCluster();
    }

    render() {
        return <ClusterEdition onSubmit={this.handleSubmit.bind(this)} {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isCreateSuccess: state.clusterReducer.isCreateSuccess,
        isCreating: state.clusterReducer.isCreating
    };
};

const mapDispatchToProps = (dispatch) => ({
    onUpdateClick: (id, value) => {
        dispatch(updateCluster(id, value))
    },
    resetCreateCluster: () => {
        dispatch(resetCreateCluster())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditClusterForm);
