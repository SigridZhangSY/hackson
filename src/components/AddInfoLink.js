import React from 'react';

import '../stylesheets/addInfoLink.scss';

class AddInfoLink extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="addInfoLink">
                <img src={this.props.pic} className="pic"/>
                <h3>{this.props.title}</h3>
                <p className="paragraph">{this.props.paragraph}</p>
                <p className="link">{this.props.link}</p>
            </div>
        )
    }
}

export default AddInfoLink;