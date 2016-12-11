import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {Paper, Divider, FlatButton, AutoComplete as MUIAutoComplete} from 'material-ui';
import {TextField, AutoComplete} from 'redux-form-material-ui';
import '../../stylesheets/editcontent.scss'

const validate = values => {
    const errors = {}
    const requiredFields = ['stack']
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

let dataSource = [];


const EditApplication = ({params, onSubmit, handleSubmit, stackList}) => {
    stackList.map((stack) => {
        if (stack.status === 'PUBLISHED')
            dataSource.push(stack.name);
    });

    return (<div className="application edit">
        <div className="page-title">
            <div className="main-title">Apps/</div>
            <div className="sub-title">Update Apps</div>
        </div>
        <div className="selfClear"></div>
        <Paper zDepth={1}>
            <form onSubmit={handleSubmit((values) => {
                return onSubmit(params.appName, values);
            })}>
                <div className="upper">
                    <div className="input-field">
                        <p>Edit App</p>
                        <Field className="input upper" name="name" component={inputField} disabled={true}
                               text={params.appName}/>

                        <Field className="input upper" name="stack"
                               component={AutoComplete}
                               floatingLabelText="Enter and select stack"
                               filter={MUIAutoComplete.fuzzyFilter}
                               dataSource={dataSource}/>
                    </div>
                    <Divider/>
                </div>
                <div className="input-field">
                    <p>Build Env</p>
                    <Field className="input" name="cluster" component={inputField} text="Cluster"/>
                </div>
                <Divider/>
                <FlatButton className="btn" label="DONE" type="submit" primary={true}/>
                <Link to="/apps?page=1&perPage=10">
                    <FlatButton className="btn" label="CANCEL"/>
                </Link>
            </form>
        </Paper>
    </div>);
};

export default reduxForm({
    form: 'application-edit',
    validate
})(EditApplication);