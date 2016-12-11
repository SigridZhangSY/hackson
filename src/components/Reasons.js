/**
 * Created by pzzheng on 12/11/16.
 */
import React from 'react';
import '../stylesheets/reasons.scss';
class Reasons extends React.Component {
    render() {
        var items = this.props.reasons.map(reason => <li><ReasonItem reasonTitle={reason.title} reasonDescription={reason.description} /></li>);
        return (
            <div className="reasons">
                <h1>为什么你会爱上它</h1>
                <ul>{items}</ul>
            </div>
        )
    }
}

class ReasonItem extends React.Component {
    render() {
        return (
            <div className="reason-item">
                <h1>{this.props.reasonTitle}</h1>
                <h3>{this.props.reasonDescription}</h3>
            </div>
        );
    }
}

export default Reasons;