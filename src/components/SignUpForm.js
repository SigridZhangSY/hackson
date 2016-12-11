import React from 'react'
import '../stylesheets/signup.scss'
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    borderRadius: 3,
    width: 270,
    textAlign: 'center',
    font: 'Roboto, sans-serif',
    fontSize: 15,
    color: 'snow',
    backgroundColor: 'silver'
};

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'username is required'
    }
    if (!values.password) {
        errors.password = 'password is required'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'confirm password is required'
    }
    if (values.password !== values.confirmPassword) {
        errors.password = 'please enter the same password'
        errors.confirmPassword = 'please enter the same password'
    }
    return errors
};

const inputField = ({input, text, type, meta: {touched, error, warning}}) => (
    <TextField {...input}
        floatingLabelText={text}
        type={type}
        errorText={touched && ((error && <span>{error}</span>))}/>
);

const SignUpForm = ({submitting, handleSubmit, error, onSubmit, isRegistering, isRegisterFailed, errorMessage}) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <Field name="username" type="input" component={inputField} text="Username:"/>
        </div>
        <div className="form-group">
            <Field name="password" type="password" component={inputField} text="Password:"/>
        </div>
        <div className="form-group">
            <Field name="confirmPassword" type="password" component={inputField} text="Confirm Password:"/>
        </div>
        {isRegisterFailed &&
        <Paper style={style} zDepth={1} rounded={false}>
            Signup failed.<br/> Please check username & password
        </Paper>
        }
        <br/>
        <div className="row">
            <div className="col-xs-offset-4 col-xs-2">
                <RaisedButton label="Sign In" type="submit" disabled={isRegistering} primary={true}/>
            </div>
        </div>
    </form>
);

export default reduxForm({
    form: 'signUp',
    validate
})(SignUpForm);

