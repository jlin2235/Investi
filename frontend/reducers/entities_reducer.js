import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import transactionReducer from './portfolio/transactions_reducer';
import { profileReducer } from './show_reducer';
import {newsReducer} from './news_reducer';
import { stocksReducer } from './search_reducer';
import { pricesReducer } from './portfolio/prices_reducer';
import { graphPricesReducer } from './portfolio/graph_prices_reducer'
import watchListReducer from './watchlist_reducer'

export default combineReducers({
    users: usersReducer,
    stocks: stocksReducer, //comes from the search reducer (used for filter suggestion)
    profile: profileReducer,
    transactions: transactionReducer,
    news: newsReducer,
    prices: pricesReducer,
    graphPrices: graphPricesReducer,
    watchlist: watchListReducer,
});
