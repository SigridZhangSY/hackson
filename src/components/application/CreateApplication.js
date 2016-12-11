import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {Link} from 'react-router';
import {
    Step,
    Stepper,
    StepButton,
    StepContent,
    RaisedButton,
    FlatButton,
    Paper,
    AutoComplete as MUIAutoComplete
} from 'material-ui';

import {
    TextField,
    Checkbox,
    AutoComplete
} from 'redux-form-material-ui';

import {AlertError} from 'material-ui/svg-icons/';

import '../../stylesheets/createcontent.scss';

const validate = values => {
    const errors = {}
    const requiredFields = ['name', 'stackName']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    return errors
};

const inputField = ({input, text, nameText, valueText, disabled, meta: {touched, error, warning}}) => (
    <TextField {...input}
               name={nameText}
               defaultValue={valueText}
               floatingLabelText={text}
               disabled={disabled}
               errorText={touched && ((error && <span>{error}</span>))}/>
);

class CreateApplication extends React.Component {
    constructor(props, state) {
        super(props, state);
        this.state = {
            stepIndex: 0
        };
    }

    handleNext() {
        const {stepIndex} = this.state;
        if (stepIndex < 1) {
            this.setState({stepIndex: stepIndex + 1});
        }
    };

    handlePrev() {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    renderStepActions(step) {
        return (
            <div style={{margin: '12px 0'}}>
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev.bind(this)}
                    />
                )}
                <RaisedButton
                    label="Next"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext.bind(this)}
                    style={{marginRight: 12}}
                />
            </div>
        );
    };

    render() {
        const {stepIndex} = this.state;
        let {submitting, handleSubmit, isCreateFail, onSubmit, curStack} = this.props;
        let dataSource = [];
        this.props.stackList.map((stack) => {
            if (stack.status === 'PUBLISHED')
                dataSource.push(stack.name);
        });

        return (
            <form onSubmit={handleSubmit((values, dispatch) => {
                if (!(Object.keys(curStack).length === 0 && curStack.constructor === Object))
                    values.stackId = curStack.id;
                else {
                    let stackList = new Map();
                    this.props.stackList.map((stack) => {
                        stackList.set(stack.name, stack.id);
                    });
                    values.stackId = stackList.get(values.stackName);
                }
                return onSubmit(values, dispatch).catch((err) => {
                    throw new SubmissionError(err);
                });
            })}>
                <div style={{maxWidth: 800, maxHeight: 600, margin: 'auto'}}>
                    <div className="title">
                        <div>
                            <Field name="name" component={inputField} text="Name"/>
                        </div>

                        <div>
                            {Object.keys(curStack).length === 0 && curStack.constructor === Object ?
                                <Field name="stackName" component={AutoComplete}
                                       floatingLabelText="Enter and select stack"
                                       filter={MUIAutoComplete.fuzzyFilter}
                                       dataSource={dataSource}/> :
                                <Field nameText="stackName" component={inputField} disabled={true}
                                       text={curStack.name} valueText=""/>
                            }
                        </div>
                    </div>

                    <Stepper
                        activeStep={stepIndex}
                        linear={false}
                        orientation="vertical"
                    >
                        <Step>
                            <StepButton onTouchTap={() => this.setState({stepIndex: 0})}>
                                Build Env
                            </StepButton>
                            <StepContent>
                                <Paper className="paper" zDepth={1}>
                                    <Field name="cluster" component={inputField} text="Cluster" className="input-1"/>
                                </Paper>
                                {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepButton onTouchTap={() => this.setState({stepIndex: 1})}>
                                Deployments
                            </StepButton>
                            <StepContent>
                                <Paper className="paper" zDepth={1}>
                                    <p className="label">Env</p>
                                    <Field name="name-1" component={inputField} text="Name" className="input-2"/>
                                    <Field name="cluster-1" component={inputField} text="Cluster"
                                           className="input-2"/>
                                    <Field name="name-2" component={inputField} text="Name" className="input-2"/>
                                    <Field name="cluster-2" component={inputField} text="Cluster"
                                           className="input-2"/>
                                    <p className="label">Setting</p>
                                    <Field name="auto" component={Checkbox} label="Auto Deploy"
                                           style={{width: '200px'}}/>
                                </Paper>
                                {this.renderStepActions(1)}
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
                <Link to="/apps?page=1&perPage=10">
                    <FlatButton label="CANCEL" style={{float: 'right'}}/>
                </Link>
                <FlatButton label="CREATE APP" type="submit" primary={true} style={{float: 'right'}}/>
                {isCreateFail &&
                <div className="error">
                    <AlertError className="icon"/>
                    <p className="message">Create Application Failed</p>
                </div>}
            </form>
        );
    }
}
;

export default reduxForm({
    form: 'create-application',
    validate
})(CreateApplication);

