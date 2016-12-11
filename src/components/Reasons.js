/**
 * Created by pzzheng on 12/11/16.
 */
import React from 'react';
import '../stylesheets/reasons.scss';
class Reasons extends React.Component {
    render() {
        var items = this.props.reasons.map(reason => <ReasonItem reasonTitle={reason.title} reasonDescription={reason.description} />);
        return (
            <div className="reasons">
                <h1>为什么你会爱上它</h1>
                {items}
            </div>
        )
    }
}

class ReasonItem extends React.Component {
    render() {
        return (
            <div className="reason-item">
                <h4>{this.props.reasonTitle}</h4>
                <p className="paragraph">{this.props.reasonDescription}</p>
            </div>
        );
    }
}

export default Reasons;