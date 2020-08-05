import { combineReducers } from 'redux';

import users from './users_reducer';
import portfolio from './portfolio_reducer';
import { profileReducer } from './show_reducer'

export default combineReducers({
    users,
    portfolio,
    profile: profileReducer
});
