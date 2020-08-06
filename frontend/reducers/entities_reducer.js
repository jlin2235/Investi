import { combineReducers } from 'redux';

import users from './users_reducer';
import portfolio from './portfolio_reducer';
import { profileReducer } from './show_reducer'
import {newsReducer} from './news_reducer'

export default combineReducers({
    users,
    portfolio,
    profile: profileReducer,
    news: newsReducer
});
