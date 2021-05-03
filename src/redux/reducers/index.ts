import { combineReducers } from 'redux';

import userReducer from './user';
import modal from './modal';
import orders from './orders'


const rootReducer = combineReducers({
	userSummary: userReducer,
	modal,
	orders
});

export default rootReducer
