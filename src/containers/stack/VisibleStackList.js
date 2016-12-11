import React from 'react';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

import {FlatButton} from 'material-ui';
import {ContentAdd} from 'material-ui/svg-icons';

import {getStacks, selectStack} from '../../actions/stack';
import StackList from '../../components/stack/StackList';
import Pagination from '../../components/Pagination';


class VisibleStackList extends React.Component {
    componentWillMount() {
        this.props.loadStacks(this.props.location.query.page, this.props.location.query.perPage);
    }

    componentWillUpdate(nextProps){
        if(nextProps.location.query.page !== this.props.location.query.page)
            this.props.loadStacks(nextProps.location.query.page, nextProps.location.query.perPage);
    }

    render() {
        return (
            <div>
                <div className="main-title">
                    <div className="text">Stack List</div>
                    <FlatButton className="add-new"
                                onClick={() => {
                                    hashHistory.push('stacks/new')
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
                        <StackList {...this.props}/>
                    </div>
                    <div className="selfClear"></div>
                    <Pagination {...this.props} page={this.props.location.query.page} perPage={this.props.location.query.perPage}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.stacks.data
    }
};

const mapDispatchToProps = (dispatch) => ({
    loadStacks: (page, perPage) => {
        dispatch(getStacks(page, perPage));
    },
    selectStackClick: (stack) => {
        dispatch(selectStack(stack))
    },
    selectPage: (page, perPage) => {
        dispatch(getStacks(page, perPage));
        hashHistory.push({
            pathname: 'stacks',
            query: {
                page: page,
                perPage: perPage
            }
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleStackList);
