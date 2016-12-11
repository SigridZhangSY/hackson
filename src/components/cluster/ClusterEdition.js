import React from 'react';
import {Link} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import {
    SelectField,
    TextField,
} from 'redux-form-material-ui'

const validate = values => {
    const errors = {};
    const requiredFields = ['name', 'type', 'uri']
    let strRegex = '((http)|(https))+://[^s]{1,}';
    let re=new RegExp(strRegex);

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
        if(field === 'uri' && errors[field] === undefined){
            if(!re.test(values.uri)) {
                errors[field] = 'uri is illegal'
            }
        }
    });
    return errors
};

const inputField = ({input, text, meta: {touched, error, warning}}) => (
    <TextField {...input}
        floatingLabelText={text}
        errorText={touched && ((error && <span>{error}</span>))}/>
);

const ClusterEdition = ({handleSubmit, isCreating}) => (
    <div className="clouds">
        <div className="page-title">
            <div className="main-title">Clusters/</div>
            <div className="sub-title">Update Cluster</div>
        </div>
        <div className="selfClear"></div>
        <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <div className="col-xs-6">
                    <Field name="name" component={inputField} text="Name:"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xs-6">
                    <Field name="type" component={SelectField} floatingLabelText="Type:" value="MARATHON">
                        <MenuItem value="MARATHON" primaryText="Marathon"/>
                    </Field>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xs-6">
                    <Field name="uri" component={inputField} text="Uri:"/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-offset-4 col-xs-2">
                    <RaisedButton label="Update" type="submit" disabled={isCreating} primary={true}/>
                </div>
                <div className="col-xs-2">
                    <Link to="/clusters?page=1&perPage=10">
                        <RaisedButton label="Cancel"/>
                    </Link>
                </div>
            </div>
        </form>
    </div>
);

export default reduxForm({
    form: 'cluster-edit',
    validate
})(ClusterEdition);