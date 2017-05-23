import React, { Component } from 'react';
import { ChatBody, InputField } from './';

export default class Chat extends Component {
    render() {
        return (
            <div className="chat-app">
                <ChatBody/>
                <hr/>
                <InputField/>
            </div>
        );
    }
}