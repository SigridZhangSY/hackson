import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import {Snackbar} from 'material-ui';
import {FlatButton} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';

import ApplicationList from '../../components/application/ApplicationList';
import {getApplications} from '../../actions/application';
import {resetSnackbar} from '../../actions/snackbar';
import Pagination from '../../components/Pagination';

class VisibleApplicationList extends React.Component {
    componentWillMount() {
        this.props.loadApplications(this.props.location.query.page, this.props.location.query.perPage);
    }

    componentWillUpdate(nextProps){
         if(nextProps.location.query.page !== this.props.location.query.page)
             this.props.loadApplications(nextProps.location.query.page, nextProps.location.query.perPage);

    }

    render() {
        return (
            <div>
                <div className="main-title">
                    <div className="text">Application List</div>
                    <FlatButton className="add-new"
                                onClick={() => {
                                    hashHistory.push('apps/new')
                                }}
                                primary={true}
                                backgroundColor="#00bcd4"
                                icon={<ContentAdd className="icon"
                                                  style={{fill: 'white'}}
                                />}
                    />
                </div>
                <div className="tab-main-content">
                    <div className="left">
                        <ApplicationList {...this.props}/>
                    </div>
                    <div className="selfClear"></div>
                    <Pagination {...this.props} page={this.props.location.query.page}
                                perPage={this.props.location.query.perPage}/>
                </div>
                <Snackbar
                    open={this.props.open}
                    message={this.props.text}
                    autoHideDuration={3000}
                    onRequestClose={this.props.resetSnackbar}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.applications.data,
        open: state.snackbar.open,
        text: state.snackbar.text
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadApplications: (page, perPage) => {
        dispatch(getApplications(page, perPage));
    },
    resetSnackbar: () => {
        dispatch(resetSnackbar());
    },
    selectPage: (page, perPage) => {
        dispatch(getApplications(page, perPage));
        hashHistory.push({
            pathname: 'apps',
            query: {
                page: page,
                perPage: perPage
            }
        });
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(VisibleApplicationList);


