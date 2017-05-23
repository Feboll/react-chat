import * as chatTypes from '../types/ChatTypes';

const defaultState = {
    messages: []
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case chatTypes.SEND:
            const newMessages = state.messages;
            newMessages.push(action.payload);
            return Object.assign({}, state, {messages: newMessages});
        default:
            return state
    }
}