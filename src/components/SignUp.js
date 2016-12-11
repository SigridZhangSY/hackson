import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleOpen () {
        this.setState({open: true});
    };

    handleClose () {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="取消"
                primary={true}
                onClick={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="注册"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose.bind(this)}
            />,
        ];

        return (
            <div>
                <FlatButton label="注册" onClick={this.handleOpen.bind(this)} />
                <Dialog
                    title="注册"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this)}
                >
                    注册
                </Dialog>
            </div>
        );
    }
}