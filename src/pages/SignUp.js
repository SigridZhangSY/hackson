import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';

import SignUpForm from '../components/SignUpForm';
import {signUp} from '../actions/login';

class SignUp extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.isRegistered) {
            hashHistory.push('signin');
        }
    }

    render() {
        return (
            <div >
                <div className="signup-box">
                    <h1>SIGN UP</h1>
                    <div className="input">
                        <SignUpForm {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isRegistering: state.session.isRegistering,
        isRegistered: state.session.isRegistered,
        isRegisterFailed: state.session.isRegisterFailed,
        errorMessage: state.session.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values, dispatch) => {
            return dispatch(signUp(values.username, values.password));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);