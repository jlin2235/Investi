import { RECEIVE_STOCKS } from "../actions/search_actions";


// This will get all the stocks from the API call and then save it into the stock
// state
export const stocksReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STOCKS:
            // action.stocks comes from the search_action.js file
            action.stocks.map(stock => nextState[stock.symbol] = stock);
            return nextState;
        default:
            return state;
    }
}
