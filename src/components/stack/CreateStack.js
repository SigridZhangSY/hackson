import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router'
import {Paper, Divider, FlatButton} from 'material-ui';
import {TextField} from 'redux-form-material-ui';
import '../../stylesheets/editcontent.scss';

const validate = values => {
    const errors = {}
    const requiredFields = ['name', 'desc']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    return errors
}

const inputField = ({input, text, disabled, meta: {touched, error, warning}}) => (
    <TextField {...input}
               floatingLabelText={text}
               disabled={disabled}
               errorText={touched && ((error && <span>{error}</span>))}/>
);

const CreateStack = () => {
    return (<div className="application edit">
        <div className="page-title">
            <div className="main-title">Stacks/</div>
            <div className="sub-title">Create Stack</div>
        </div>
        <div className="selfClear"></div>
        <Paper zDepth={1}>
            <form>
                <div className="upper">
                    <div className="input-field">
                        <p>Create new Stack</p>
                        <Field className="input upper" name="name" component={inputField} text="Name"/>
                        <Field className="input upper" name="desc" text="Description" component={inputField}/>
                    </div>
                    <Divider/>
                </div>
                <div className="input-field">
                    <p>Document</p>
                    <p>Stack File</p>

                </div>
                <Divider/>
                <FlatButton className="btn" label="DONE" type="submit" primary={true}/>
                <Link to="/stacks?page=1&perPage=10">
                    <FlatButton className="btn" label="CANCEL"/>
                </Link>
            </form>
        </Paper>
    </div>);
};

export default reduxForm({
    form: 'stack-create',
    validate
})(CreateStack);