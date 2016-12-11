import React from 'react';
import {FlatButton, Popover, Menu, MenuItem, Subheader, Divider} from 'material-ui';
import {MapsPersonPin, ActionDescription, ActionPowerSettingsNew}from 'material-ui/svg-icons';
import { hashHistory } from 'react-router';


export default class AccountEntry extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap (event) {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose() {
        this.setState({
            open: false,
        });
    };

    render(){
        let {logout, user} = this.props;
        let parts = user.email.split('@');
        return(
            <div className="account-entry">
                <FlatButton
                    onTouchTap={this.handleTouchTap.bind(this)}
                    label={parts[0]}
                    icon={<MapsPersonPin className="account-icon"/>}
                >
                </FlatButton>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose.bind(this)}
                >
                    <Menu style={{width:168}}>
                        {/*<Subheader style={{fontSize:10, height:30}}>Config</Subheader>*/}
                        <MenuItem style={{fontSize:13, height:30}} leftIcon={<ActionDescription/>}
                                  className="menuitem" primaryText="My profile" />
                        <Divider/>
                        <MenuItem style={{fontSize:13, height:30}} leftIcon={<ActionPowerSettingsNew style={{fill:'red'}}/>}
                                  className="menuitem" primaryText="Logout" onTouchTap={logout}
                        />
                    </Menu>

                </Popover>
            </div>
        );
    };
};