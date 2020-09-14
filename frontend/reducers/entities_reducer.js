import { combineReducers } from 'redux';

import users from './users_reducer';
import portfolio from './portfolio_reducer';
import { profileReducer } from './show_reducer';
import {newsReducer} from './news_reducer';
import { stocksReducer } from './search_reducer';

export default combineReducers({
    users,
    stocks: stocksReducer, //comes from the search reducer (used for filter suggestion)
    profile: profileReducer,
    // portfolio,
    // news: newsReducer,
});
