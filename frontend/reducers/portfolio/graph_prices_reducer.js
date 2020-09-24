import {
    RECEIVE_FIVEMIN,
    RECEIVE_THIRTYMIN,
    RECEIVE_PRICEFIVEYR,
    RECEIVE_FIVEMIN_BATCH,
} from '../../actions/graph_actions'


export const graphPricesReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({},oldState);
    switch (action.type) {
        case RECEIVE_FIVEMIN:
            debugger
            nextState['fiveMin'] = action.prices;
            return nextState;
        case RECEIVE_THIRTYMIN:
            debugger
            nextState['thirtyMin'] = action.prices;
            return nextState;
        case RECEIVE_PRICEFIVEYR:
            debugger
            nextState['fiveYr'] = action.prices.historical;
            return nextState;
        case RECEIVE_FIVEMIN_BATCH:
            debugger
            nextState[action.prices.symbols] = action.prices.prices
            return nextState
        default:
            return oldState;
    }

}