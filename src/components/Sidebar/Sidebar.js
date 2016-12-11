import React from 'react';
import {Link, hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {sidebar} from '../../actions/sidebar'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {ActionDashboard, ActionExplore, FileCloud, NavigationApps} from 'material-ui/svg-icons';

const drawerStyle = {
    backgroundColor: '#3E474E'
};

const appbarStyle = {
    height: 65
};

const itemStyle = {
    margin: '16px 0 16px 0',
    fontWeight: 300,
    color: 'white'
};

const currentItemStyle = {
    margin: '16px 0 16px 0',
    fontWeight: 600,
    color: 'white'
};

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 60
        }
    }

    onMouseOver() {
        this.setState({width: 170});
    }

    onMouseOut() {
        this.setState({width: 60});
    }

    render() {
        const tabs = [
            {
                tabName: "dashboard",
                icon: <ActionDashboard color="rgba(255, 255, 255, 0.5)" hoverColor="white"/>,
                selectedIcon: <ActionDashboard color="white"/>
            },
            {
                tabName: "stacks",
                icon: <ActionExplore color="rgba(255, 255, 255, 0.5)" hoverColor="white"/>,
                selectedIcon: <ActionExplore color="white"/>
            },
            {
                tabName: "apps",
                icon: <NavigationApps color="rgba(255, 255, 255, 0.5)" hoverColor="white"/>,
                selectedIcon: <NavigationApps color="white"/>
            },
            {
                tabName: "clusters",
                icon: <FileCloud color="rgba(255, 255, 255, 0.5)" hoverColor="white"/>,
                selectedIcon: <FileCloud color="white"/>
            }
        ];

        return (
            <div onMouseOver={this.onMouseOver.bind(this)}
                 onMouseOut={this.onMouseOut.bind(this)}>
                <Drawer width={this.state.width} containerStyle={drawerStyle}>
                    <AppBar style={appbarStyle}/>
                    {tabs.map((tab) => {
                        return (
                            <MenuItem key={tab.tabName}
                                      style={tab.tabName===this.props.current ? currentItemStyle : itemStyle}
                                      primaryText={tab.tabName}
                                      leftIcon={tab.tabName===this.props.current ? tab.selectedIcon : tab.icon}
                                      onClick={() => this.props.changeTab(tab.tabName)}>
                            </MenuItem>
                        )
                    })}
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current: state.sidebar.current
});

const mapDispatchToProps = (dispatch) => ({
    changeTab: (tabName) => {
        hashHistory.push({
            pathname: tabName,
        query:{
                page:1,
            perPage:10
        }});
        dispatch(sidebar(tabName))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);