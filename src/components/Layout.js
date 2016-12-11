import React from 'react';
import {Link} from 'react-router';


class Layout extends React.Component {
    render() {
        return (
            <div className="layout">

                {this.props.main}

            </div>
        )
    }
}


export default Layout;