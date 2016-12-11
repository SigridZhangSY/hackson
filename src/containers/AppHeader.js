import React from 'react'
import {connect} from 'react-redux';
import Header from '../components/Header'
import {logout} from '../actions/login'
import { hashHistory } from 'react-router';

import {getCurrentUser, getAuth} from '../actions/login';



class AppHeader extends React.Component {
    componentWillMount(){
        this.props.getAuth();
    }

    componentWillUpdate(nextProps){
        if(nextProps.isAuthenticated !== this.props.isAuthenticated && nextProps.isAuthenticated)
            this.props.loadUser();

    }
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.session.isAuthenticated,
        user:state.session.curUser
    }
};


const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout());
        hashHistory.push('/signin');
    },
    loadUser: () => {
        dispatch(getCurrentUser());
    },
    getAuth: () => {
        dispatch(getAuth());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);