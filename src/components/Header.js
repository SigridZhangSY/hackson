import React from 'react';
import {AppBar, FlatButton} from 'material-ui';
import {Link} from 'react-router';

import SignUp from './SignUp';
import Login from './Login';
import Help from './Help';
import '../stylesheets/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">LOGO</div>
                <div className="entrypoint">
                    <div className="link">
                        <SignUp />
                    </div>
                    <div className="link">
                        <Login />
                    </div>
                    <div className="link">
                        <Help />
                    </div>
                </div>
            </div>
        );
    }
}
;

export default Header;