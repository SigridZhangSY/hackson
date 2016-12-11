import React from 'react';
import {connect} from 'react-redux';

import EditApplication from '../../components/application/EditApplication';
import {updateApplication, resetOperate} from '../../actions/application';
import {getAllStacks} from '../../actions/stack';
import {hashHistory} from 'react-router';

class EditApplicationForm extends React.Component{
    componentWillMount() {
        this.props.loadStackList();
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isUpdateSuccess) {
            hashHistory.push({
                pathname: 'apps',
                query:{
                    page:1,
                    perPage:10
                }});
        }
    };

    componentWillUnmount(){
        this.props.reset();

    };

    render(){
        return(
            <div>
                <EditApplication {...this.props}/>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    stackList:state.stacks.data.items,
    isUpdateSuccess:state.applications.isOperateSuccess,
    isUpdateFail:state.applications.isOperateFail
});

const mapDispatchToProps = (dispatch) => ({
    loadStackList: () => {
        dispatch(getAllStacks());
    },
    onSubmit: (appName, value) => {
        dispatch(updateApplication(appName, value));
    },
    reset: ()=>{
        dispatch(resetOperate());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditApplicationForm);