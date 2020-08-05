import { RECEIVE_NEWS } from './../actions/search_actions'

export const profileReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_NEWS:
            debugger
            return Object.assign({}, nextState, action.news)
        // nextState[profile.symbol] = profile
        // return nextState
        default:
            return state;
    }
}