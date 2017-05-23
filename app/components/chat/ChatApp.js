import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ChatBody, InputField} from './';
import ChatBot from './ChatBot';
import { connect } from 'react-redux'
import * as chatActions from '../../actions/ChatActions';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.messages,
            bot: new ChatBot()
        };
    }

    submitMessage(e) {
        this.props.sendMessage(e);
        this.props.sendMessage(this.state.bot.getMessage(e));
        this.setState({messages: this.props.messages});
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

ChatApp.propTypes = {
    messages: PropTypes.array,
    sendMessage: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        messages: state.chat.messages
    }
};

const mapActionToProps = (dispatch) => {
    return {
        sendMessage(message) {
            dispatch(chatActions.send(message));
        }
    }
};

export default connect(mapStateToProps, mapActionToProps)(ChatApp);