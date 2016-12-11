import React from 'react';
import {Link} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {MenuItem, Paper, FlatButton} from 'material-ui';
import {
    SelectField,
    TextField,
} from 'redux-form-material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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

const ClusterCreation = ({handleSubmit, isCreating}) => (
    <div className="clouds">
        <div className="page-title">
            <div className="main-title">Clusters/</div>
            <div className="sub-title">Create Cluster</div>
        </div>
        <div className="selfClear"></div>

        <form onSubmit={handleSubmit}>
            <Paper zDepth={1} style={{paddingLeft:20, paddingBottom:20, marginBottom: 20}}>
            <div className="form-group row">
                <div className="col-xs-6">
                    <Field name="name" component={inputField} text="Name:"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xs-6">
                    <Field name="type" component={SelectField} floatingLabelText="Type:">
                        <MenuItem value="MARATHON" primaryText="Marathon"/>
                    </Field>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-xs-6">
                    <Field name="uri" component={inputField} text="Uri:"/>
                </div>
            </div>
                </Paper>
            <div className="row">
                <div className="col-xs-offset-8 col-xs-2">
                    <FlatButton label="Create" type="submit" disabled={isCreating} primary={true}/>
                </div>
                <div className="col-xs-2">
                    <Link to="/clusters？page=1&perPage=10">
                        <FlatButton label="Cancel"/>
                    </Link>
                </div>
            </div>
        </form>
    </div>
);

export default  reduxForm({
    form: 'cluster-create',
    validate
})(ClusterCreation);