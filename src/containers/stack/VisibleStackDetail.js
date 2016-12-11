import React from 'react';
import {connect} from 'react-redux';

import StackDetail from '../../components/stack/StackDetail';
import {getStackDetail, selectStack} from '../../actions/stack';

class VisibleStackDetail extends React.Component{
    componentWillMount() {
        let stackId = this.props.params.stackId;
        this.props.loadStackDetail(stackId);
    }
    render(){
        return(
            <div>
                <StackDetail {...this.props}/>
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return {
        stackDetail: state.stacks.stackDetail
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadStackDetail: (stackId) => {
        dispatch(getStackDetail(stackId));
    },
    selectStackClick: (stack) => {
        dispatch(selectStack(stack))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleStackDetail);