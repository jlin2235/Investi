import {
    RECEIVE_PRICE,
    RECEIVE_PRICES
} from "../../actions/search_actions";

export const pricesReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PRICES:
            debugger
            let stockPrice = {};
            let pricesArray = Object.values(action.prices)
            pricesArray.forEach(element => {
                debugger
                stockPrice[element.quote.symbol] = element.price;
            })
            return stockPrice;
        case RECEIVE_PRICE:
            debugger
            return action.price
        default:
            return state;
    }
}
