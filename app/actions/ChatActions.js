import * as chatTypes from '../types/ChatTypes';

export const send = (message) => ({
    type: chatTypes.SEND,
    payload: message
});
