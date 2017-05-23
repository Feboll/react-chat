import React, { Component } from 'react';
import { ChatBody, InputField } from './';
import ChatBot from './ChatBot';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            bot: new ChatBot()
        };
    }

    submitMessage(e) {
        this.addMessage(e);
        this.addMessage(this.state.bot.getMessage(e));
    }

    addMessage(message) {
        this.state.messages.push(message);
        this.setState({messages: this.state.messages});
    }

    render() {
        return (
            <div className="chat-app">
                <ChatBody messages={this.state.messages}/>
                <hr/>
                <InputField submitMessage={this.submitMessage.bind(this)} messages={this.state.messages}/>
            </div>
        );
    }
}