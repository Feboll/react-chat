import React, { Component } from 'react';
import Message from './Message';

export default class ChatBody extends Component {
    render() {
        return (
            <div>
                body
                <Message who="bot" />
                <Message who="user" />
            </div>
        );
    }
}