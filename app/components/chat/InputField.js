import React, { Component } from 'react';

export default class Chat extends Component {
    render() {
        return (
            <form>
                <input type="text" className="u-full-width" placeholder="Hi!"/>
                <input className="button-primary" type="submit" value="Send"/>
            </form>
        );
    }
}