import {
    CREATE_WATCHLIST,
    GET_ALL_WATCHLIST,
    GET_ONE_WATCHLIST
} from '../actions/watchlist_actions'

const watchListReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case GET_ALL_WATCHLIST:
            return action.watchlists;
        case GET_ONE_WATCHLIST:
            debugger
            return action.watchlist;
        case CREATE_WATCHLIST:
            debugger
            if (action.watchlist == undefined) {
                return nextState;
            } else {
                return action.watchlist;
            }
        default:
            return state;
    }
}

export default watchListReducer;