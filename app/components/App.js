import React, {Component} from 'react';
import ChatApp from './chat/ChatApp';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <ChatApp />
            </div>
        );
    }
}