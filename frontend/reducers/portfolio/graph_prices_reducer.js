import {
    RECEIVE_FIVEMIN,
    RECEIVE_THIRTYMIN,
    RECEIVE_PRICEFIVEYR,
} from '../../actions/graph_actions'


export const graphPricesReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({},oldState);
    switch (action.type) {
        case RECEIVE_FIVEMIN:
            nextState['fiveMin'] = action.prices;
            return nextState;
        case RECEIVE_THIRTYMIN:
            nextState['thirtyMin'] = action.prices;
            return nextState;
        case RECEIVE_PRICEFIVEYR:
            nextState['fiveYr'] = action.prices;
            return nextState;
        default:
            return oldState;
    }

}