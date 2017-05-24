import React, { Component } from 'react';

export default class InputField extends Component {
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
        this.setState({message: {name: 'user', body: message.target.value}});
    }

    sendMessage(form) {
        form.preventDefault();
        if(this.state.message.body.length > 0) {
            this.props.submitMessage(this.state.message);
            document.getElementById('message-form').reset();
        }

    }

    render() {
        return (
            <form onSubmit={this.sendMessage.bind(this)} id="message-form">
                <input type="text" className="u-full-width" name="message" onChange={this.handleMessage.bind(this)} placeholder="Hi!"/>
                <input className="button-primary" type="submit" value="Send" onClick={this.sendMessage.bind(this)}/>
            </form>
        );
    }
}