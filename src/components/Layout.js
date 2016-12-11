import React from 'react';
import {Link} from 'react-router';

import '../stylesheets/layout.scss'

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <header>
                    {this.props.header}
                </header>
                <div className="header-placeholder"></div>
                
                {this.props.main}
                
                <footer>
                    {this.props.footer}
                </footer>
            </div>
        )
    }
}


export default Layout;
