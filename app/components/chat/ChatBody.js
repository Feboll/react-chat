import React, { Component } from 'react';
import Message from './Message';

export default class ChatBody extends Component {
    render() {
        return (
            <div className="chat-body">
                body
                <Message who="bot" />
                <Message who="user" />
            </div>
        );
    }
}