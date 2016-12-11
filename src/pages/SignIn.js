import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

import SignInForm from '../components/SignInForm';
import {login, getAuth} from '../actions/login';

class SignIn extends React.Component {
    componentWillMount(){
        getAuth();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoginSuccess) {
            hashHistory.push('dashboard');
        }
    }

    render() {
        return (
            <div >
                <div className="signin-box">
                        <h1>SIGN IN</h1>
                    <div className="input">
                        <SignInForm {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isLoginSuccess: state.session.isAuthenticated,
        isAuthenticating: state.session.isAuthenticating,
        isLoginFailed: state.session.isLoginFailed
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values, dispatch) => {
            return dispatch(login(values.username, values.password));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);