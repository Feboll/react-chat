import React, { Component } from 'react';

export default class Message extends Component {
    render() {

        return (
            <div className="row">
                <div className={(this.props.who === 'user' ? 'offset-by-four user-message' : 'bot-message') + ' eight columns'}>Message</div>
            </div>
        );
    }
}

Message.propTypes = {
    who: React.PropTypes.string
};