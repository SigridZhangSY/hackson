import React from 'react';
import AddInfoLinks from './AddInfoLinks'
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
                <div className="container">
                    <AddInfoLinks title="三步就让您加入合作社"/>
                </div>
            </div>
        )
    }
}

export default Welcome;