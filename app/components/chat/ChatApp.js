import React, { Component } from 'react';
import { ChatBody, InputField } from './';

export default class Chat extends Component {
    render() {
        return (
            <div>
                <ChatBody/>
                <InputField/>
            </div>
        );
    }
}