import React from 'react';
import {connect} from 'react-redux';

import CreateApplication from '../../components/application/CreateApplication';
import {createApplication, resetOperate} from '../../actions/application';
import {getAllStacks, resetSelectedStack} from '../../actions/stack';
import {hashHistory} from 'react-router';

class AddApplicationForm extends React.Component{
    componentWillMount() {
        this.props.loadStackList();
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isCreateSuccess) {
            hashHistory.push({
                pathname: 'apps',
                query: {
                    page: 1,
                    perPage: 10
                }
            });
        }
    };

    componentWillUnmount(){
      this.props.reset();

    };

    render(){
        return(
            <div>
                <div className="page-title">
                    <div className="main-title">Apps/</div>
                    <div className="sub-title">Create App</div>
                </div>
                <div className="selfClear"></div>
                <CreateApplication {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        curStack: state.stacks.curStack,
        stackList:state.stacks.data.items,
        isCreateSuccess:state.applications.isOperateSuccess,
        isCreateFail:state.applications.isOperateFail
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadStackList: () => {
        dispatch(getAllStacks());
    },
    onSubmit:(value, dispatch) => {
        dispatch(createApplication(value));
    },
    reset: ()=>{
        dispatch(resetSelectedStack());
        dispatch(resetOperate());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddApplicationForm);