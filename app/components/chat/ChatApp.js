import React, { Component } from 'react';
import { ChatBody, InputField } from './';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        console.log(this.state)
    }

    submitMessage(e) {
        console.log(e);
        this.state.messages.push(e);
        this.setState({messages: this.state.messages});
    }

    render() {
        return (
            <div className="chat-app">
                <ChatBody messages={this.state.messages} />
                <hr/>
                <InputField submitMessage={this.submitMessage.bind(this)} messages={this.state.messages} />
            </div>
        );
    }
}