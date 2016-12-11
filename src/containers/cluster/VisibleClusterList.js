import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

import {FlatButton, Snackbar} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';

import ClusterList from '../../components/cluster/ClusterList';
import {removeCluster, readClusters} from '../../actions/cluster';
import {resetSnackbar} from '../../actions/snackbar';
import Pagination from '../../components/Pagination';


class VisibleClusterList extends React.Component {
    componentWillMount() {
        this.props.loadClusters(this.props.location.query.page, this.props.location.query.perPage);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.data.items.length !== this.props.data.items.length) {
            this.props.loadClusters(this.props.location.query.page, this.props.location.query.perPage);
        }
        if (nextProps.location.query.page !== this.props.location.query.page)
            this.props.loadClusters(nextProps.location.query.page, nextProps.location.query.perPage);
    }

    render() {
        return (
            <div className="clouds">
                <div className="main-title">
                    <div className="text"> Cluster List</div>
                    <FlatButton className="add-new"
                                onClick={() => {
                                    hashHistory.push('clusters/new')
                                }}
                                primary={true}
                                backgroundColor="#00bcd4"
                                icon={<ContentAdd className="icon"
                                                  style={{fill: 'white'}}
                                />}
                    />
                </div>
                <ClusterList {...this.props} />
                <Pagination {...this.props} page={this.props.location.query.page}
                            perPage={this.props.location.query.perPage}/>
                <Snackbar
                    open={this.props.open}
                    message={this.props.text}
                    autoHideDuration={4000}
                    onRequestClose={() => {
                        this.props.resetSnackbar()
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.clusterReducer.displayedClusters,
        open: state.snackbar.open,
        text: state.snackbar.text
    }
};

const mapDispatchToProps = (dispatch) => ({
    onDeleteClick: (id) => {
        dispatch(removeCluster(id));
    },
    loadClusters: (page, perPage) => {
        dispatch(readClusters(page, perPage));
    },
    resetSnackbar: () => {
        dispatch(resetSnackbar())
    },
    selectPage: (page, perPage) => {
        dispatch(readClusters(page, perPage));
        hashHistory.push({
            pathname: 'clusters',
            query: {
                page: page,
                perPage: perPage
            }
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleClusterList);
