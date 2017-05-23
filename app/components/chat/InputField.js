import React, { Component } from 'react';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                name: 'user',
                body: ''
            }
        }
    }

    handleMessage(message) {
        this.setState({message: {name: 'user', body: message.target.value}}, () => console.log(this.state.message));
    }

    sendMessage(form) {
        form.preventDefault();
        this.props.submitMessage(this.state.message);
    }

    render() {
        return (
            <form onSubmit={this.sendMessage.bind(this)} name="message-form">
                <input type="text" className="u-full-width" name="message" onChange={this.handleMessage.bind(this)} placeholder="Hi!"/>
                <input className="button-primary" type="submit" value="Send" onClick={this.sendMessage.bind(this)}/>
            </form>
        );
    }
}