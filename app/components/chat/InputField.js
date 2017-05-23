import React, { Component } from 'react';

export default class Chat extends Component {
    render() {
        return (
            <form>
                <textarea className="u-full-width" placeholder="Hi!"/>
                <input className="button-primary" type="submit" value="Submit"/>
            </form>
        );
    }
}