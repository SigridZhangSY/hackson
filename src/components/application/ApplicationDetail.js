import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {HardwareKeyboardArrowLeft, EditorModeEdit} from 'material-ui/svg-icons/';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import {hashHistory} from 'react-router';

export default class ApplicationDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange(value) {
        this.setState({
            value: value,
        });
    };

    render() {
        let {appDetail} = this.props;
        return (
            <div className="detailContent">
                <div className="page-title">
                    <div className="main-title">Apps/</div>
                    <div className="sub-title">App Detail</div>
                </div>
                <FlatButton
                    primary={true}
                    className="btn"
                    label="Back"
                    labelPosition="before"
                    icon={<HardwareKeyboardArrowLeft className="left-arrow icon"/>}
                    onClick={() => {
                        hashHistory.push({
                            pathname: 'apps',
                            query: {
                                page: 1,
                                perPage: 10
                            }
                        })
                    }}/>
                <div className="selfClear"></div>
                <Paper className="detail paper" zDepth={1}>
                    <div className="title">
                        <p className="text">{appDetail.name}</p>
                        <div style={{float: 'right'}}>
                            <EditorModeEdit onClick={() => {
                                hashHistory.push('apps/' + appDetail.name + '/edit')
                            }}/>
                        </div>
                        <div className="selfClear"></div>
                    </div>
                    <Divider/>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        style={{marginTop: 20}}
                    >
                        <Tab label="Deployments" value="a" className="tab">
                            <div>
                                <p>
                                    Deployments
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Builds" value="b" className="tab">
                            <div>
                                <p>
                                    Builds
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Releases" value="c" className="tab">
                            <div>
                                <p>
                                    Releases
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Collaborators" value="d" className="tab">
                            <div>
                                <p>
                                    Collaborators
                                </p>
                            </div>
                        </Tab>
                    </Tabs>

                </Paper>
            </div>
        );
    };
};