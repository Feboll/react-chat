import React, { Component } from 'react';
import Message from './Message';

export default class ChatBody extends Component {
    render() {
        return (
            <div className="chat-body">
                {this.props.messages.map((message) => <Message who={message.name} message={message.body} />)}
            </div>
        );
    }
}