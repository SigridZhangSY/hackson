import React from 'react';

import '../stylesheets/addInfoLink.scss';

class AddInfoLink extends React.Component {
    render() {
        return (
            <div id={this.props.id} className="addInfoLink">
                <img src={this.props.pic} className="pic"/>
                <div className="container">
                    <h4 className="title">{this.props.title}</h4>
                    <p className="paragraph">{this.props.paragraph}</p>
                    <p className="link">{this.props.link}</p>
                </div>
            </div>
        )
    }
}

export default AddInfoLink;