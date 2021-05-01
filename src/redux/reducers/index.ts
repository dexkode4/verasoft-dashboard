import { combineReducers } from 'redux';

import userReducer from './user';


const rootReducer = combineReducers({
	userSummary: userReducer
});

export default rootReducer
