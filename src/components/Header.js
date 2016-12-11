import React from 'react';
import {Link} from 'react-router';
import '../stylesheets/header.scss'
import {MapsPersonPin} from 'material-ui/svg-icons';
import {AppBar, FlatButton} from 'material-ui';

import AccountEntry from './AccountEntry';

const cdeStyle = {
    width: 60
}

const twStyle = {
    marginTop: 7,
    marginLeft: 15
}

class Header extends React.Component {

    render() {
        const {isAuthenticated} = this.props;
        const currentLocation = this.props.location.pathname;
        return (
            <AppBar className="header"
                    title={
                        <div className="branding">
                            <Link to="/">
                                <div className="title">
                                      <img src={require('../icon/favicon.png')} style={cdeStyle}/>
                                </div>
                                <div className="logo">
                                    <img src={require('../icon/tw-logo.jpg')} style={twStyle} />
                                </div>
                            </Link>
                        </div>
                    }
                    iconClassNameLeft="hide">

                <div className="entrypoint">
                    {!isAuthenticated && (!(currentLocation === "/signin") &&
                    <FlatButton label="SIGN IN" className="signin"
                                containerElement={<Link to={"/signin"}/>}></FlatButton>)
                    }
                    {!isAuthenticated && (!(currentLocation === "/signup") &&
                    <FlatButton label="SIGN UP" className="signup"
                                containerElement={<Link to={"/signup"}/>}></FlatButton>)
                    }
                    {isAuthenticated &&
                    <AccountEntry {...this.props}/>}
                </div>
            </AppBar>
        );
    }
}

export default Header;