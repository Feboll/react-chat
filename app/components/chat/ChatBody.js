import React, { Component } from 'react';
import Message from './Message';

export default class ChatBody extends Component {
    componentDidUpdate(){
        var objDiv = document.getElementById("chat-messages");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    render() {
        return (
            <div className="chat-body" id="chat-messages">
                {this.props.messages.map((message, index) => <Message key={index} who={message.name} message={message.body} />)}
            </div>
        );
    }
}