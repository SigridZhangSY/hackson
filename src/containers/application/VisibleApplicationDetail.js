import React from 'react';
import {connect} from 'react-redux';

import ApplicationDetail from '../../components/application/ApplicationDetail';
import {getApplicationDetail} from '../../actions/application';


class VisibleApplicationDetail extends React.Component{
    componentWillMount() {
        let appName = this.props.params.appName;
        this.props.loadApplicationDetail(appName);
    }

    render(){
      return(
          <div>
            <ApplicationDetail {...this.props}/>
          </div>
      );
    };
};

const mapStateToProps = (state) => {
    return {
        appDetail: state.applications.appDetail
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadApplicationDetail: (appName) => {
        dispatch(getApplicationDetail(appName));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleApplicationDetail);
