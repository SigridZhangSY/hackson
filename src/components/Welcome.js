import React from 'react';

import background from '../img/index-title-background.png';
import '../stylesheets/welcome-background.scss';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="welcome-text">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.text}</h3>
                </div>
                <img src={background} className="welcome-background"/>
            </div>
        )
    }
}

export default Welcome;