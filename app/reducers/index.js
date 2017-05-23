import { combineReducers } from 'redux'
import chat from './ChatReducers.js';

const chatApp = combineReducers({
    chat
});


export default chatApp;