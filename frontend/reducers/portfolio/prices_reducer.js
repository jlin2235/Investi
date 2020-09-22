import {
    RECEIVE_PRICE,
    RECEIVE_PRICES
} from "../../actions/search_actions";

export const pricesReducer = (OldState = [], action) => {
    Object.freeze(OldState);
    let nextState = Object.assign({}, OldState);
    switch (action.type) {
        case RECEIVE_PRICES:
            // debugger
            let stockPrice = {};
            let pricesArray = Object.values(action.prices)
            pricesArray.forEach(element => {
                // debugger
                stockPrice[element.quote.symbol] = element.price;
            })
            return stockPrice;
        case RECEIVE_PRICE:
            // debugger
            return action.price
        default:
            return OldState;
    }
}
