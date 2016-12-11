import React from 'react';
import {HardwareKeyboardArrowLeft} from 'material-ui/svg-icons/';
import {FlatButton, Paper, Tabs, Tab, Toolbar, ToolbarGroup} from 'material-ui';


export default class DeploymentDetail extends React.Component{
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

    render(){
      return (
            <div className="detailContent">
                <Toolbar className="toolbar">
                    <ToolbarGroup firstChild={true}>
                        <FlatButton
                            primary={true}
                            className="btn"
                            label="Back"
                            labelPosition="before"
                            icon={<HardwareKeyboardArrowLeft className="left-arrow icon"/>}
                            />
                    </ToolbarGroup>
                </Toolbar>

                <Paper className="paper" zDepth={1}>
                    <p className="title">Deployment</p>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    >
                        <Tab label="Info" value="a" className="tab" >
                            <div>
                                <p>
                                    Info
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Containers" value="b" className="tab" >
                            <div>
                                <p>
                                    Builds
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Tasks" value="c" className="tab" >
                            <div>
                                <p>
                                    Releases
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Routes" value="d" className="tab" >
                            <div>
                                <p>
                                    Collaborators
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Configruation" value="e" className="tab" >
                            <div>
                                <p>
                                    Collaborators
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Log" value="f" className="tab" >
                            <div>
                                <p>
                                    Log
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Monitor" value="g" className="tab" >
                            <div>
                                <p>
                                    Monitor
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Events" value="h" className="tab" >
                            <div>
                                <p>
                                    Events
                                </p>
                            </div>
                        </Tab>
                        <Tab label="Settings" value="i" className="tab" >
                            <div>
                                <p>
                                    Settings
                                </p>
                            </div>
                        </Tab>
                    </Tabs>

                </Paper>
            </div>
      );
  }
};