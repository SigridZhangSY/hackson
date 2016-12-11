import React from 'react';
import { HardwareKeyboardArrowLeft, ActionLaunch } from 'material-ui/svg-icons/';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import {hashHistory} from 'react-router';

import StackInfo from './StackInfo';
import StackServices from './StackServices';
import VisibleStackEventList from '../../containers/stack/VisibleStackEventList';
import '../../stylesheets/detailcontent.scss'

export default class StackDetail extends React.Component {
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
        let {stackDetail, selectStackClick} = this.props;
        return (
            <div className="detailContent">
                <div className="page-title">
                    <div className="main-title">Stacks/</div>
                    <div className="sub-title">Stack Detail</div>
                </div>
                        <FlatButton
                            primary={true}
                            className="btn"
                            label="Back"
                            labelPosition="before"
                            icon={<HardwareKeyboardArrowLeft className="left-arrow icon"/>}
                            onClick={() => {
                                hashHistory.push({
                                    pathname: 'stacks',
                                    query:{
                                        page:1,
                                        perPage:10
                                    }})
                            }}/>
                <Paper className="detail paper" zDepth={1}>
                    <div className="title">
                        <p className="text">{stackDetail.name}</p>
                    <ActionLaunch
                        className = "use icon"
                        onClick={() => {
                            const stack = {
                                name: stackDetail.name,
                                id: stackDetail.id
                            }
                            selectStackClick(stack);
                            hashHistory.push('apps/new')
                        }}
                    />
                        <div className="selfClear"></div>
                    </div>
                    <p className="sub-title">{stackDetail.description}</p>
                    <Divider/>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        style={{marginTop:20}}
                    >
                        <Tab label="Info" value="a" className="tab" >
                            <StackInfo {...this.props}/>
                        </Tab>
                        <Tab label="Service" value="b" className="tab" >
                            <div>
                                <StackServices {...this.props}/>
                            </div>
                        </Tab>
                        <Tab label="Events" value="c" className="tab" >
                            <div>
                                <VisibleStackEventList stackId={stackDetail.id}/>
                            </div>
                        </Tab>
                        <Tab label="Settings" value="d" className="tab" >
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
