import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import ClusterDetail from '../../components/cluster/ClusterDetail';
import {HardwareKeyboardArrowLeft} from 'material-ui/svg-icons';
import FlatButton from 'material-ui/FlatButton';

import {getClusterDetail, removeCluster} from '../../actions/cluster';

class VisibleClusterDetail extends React.Component {
    componentWillMount() {
        this.props.loadClusterDetail(this.props.params.id);
    }

    render() {
        return (
            <div className="detailContent">
                <div>
                    <div className="page-title">
                        <div className="main-title">Clusters/</div>
                        <div className="sub-title">Cluster Detail</div>
                    </div>
                    <FlatButton
                        primary={true}
                        className="btn"
                        label="Back"
                        labelPosition="before"
                        icon={<HardwareKeyboardArrowLeft className="left-arrow icon"/>}
                        onClick={() => {
                            hashHistory.push({
                                pathname: 'clusters',
                                query: {
                                    page: 1,
                                    perPage: 10
                                }
                            })
                        }}>
                    </FlatButton>
                </div>

                <ClusterDetail {...this.props}/>

            </div>
        )
    }
}
;

const mapStateToProps = (state) => {
    return {cluster: state.clusterReducer.cluster}
};

const mapDispatchToProps = (dispatch) => ({
    onDeleteClick: (id) => {
        dispatch(removeCluster(id));
        hashHistory.push({
            pathname: 'clusters',
            query: {
                page: 1,
                perPage: 10
            }
        });
    },
    loadClusterDetail: (id) => {
        dispatch(getClusterDetail(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleClusterDetail);