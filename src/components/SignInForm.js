import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {
    TextField
} from 'redux-form-material-ui'
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
    return errors
};

const inputField = ({input, text, type, meta: {touched, error, warning}}) => (
    <TextField {...input}
        floatingLabelText={text}
        type={type}
        errorText={touched && ((error && <span>{error}</span>))}/>
);

const SignInForm = ({submitting, handleSubmit, error, onSubmit, isAuthenticating, isLoginFailed}) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <Field name="username" type="input" component={inputField} text="Username:"/>
        </div>
        <div className="form-group">
            <Field name="password" type="password" component={inputField} text="Password:"/>
        </div>
        {isLoginFailed &&
        <Paper style={style} zDepth={1} rounded={false}>
            Login failed.<br/> Please check username & password
        </Paper>
        }
        <br/>
        <div className="row">
            <div className="col-xs-offset-4 col-xs-2">
                <RaisedButton label="Sign In" type="submit" disabled={isAuthenticating} primary={true}/>
            </div>
        </div>
    </form>
);

export default reduxForm({
    form: 'login',
    validate
})(SignInForm);




