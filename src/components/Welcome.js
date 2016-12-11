import React from 'react';

import background from '../img/index-title-background.png';
import '../stylesheets/welcome-background.scss';

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome">
                <div className="welcome-text">
                    <h1>{this.props.line1}</h1>
                    <h1>{this.props.line2}</h1>
                    <p className="content">{this.props.text}</p>
                </div>
                <img src={background} className="welcome-background"/>
            </div>
        )
    }
}

export default Welcome;