import React from 'react';
import {AppBar, FlatButton} from 'material-ui';
import {Link} from 'react-router';
import '../stylesheets/header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">LOGO</div>
                <div className="entrypoint">
                    <Link className="link" to="/">
                        登录
                    </Link>
                    <Link className="link" to="/">
                        注册
                    </Link>
                </div>
            </div>
        );
    }
}
;

export default Header;