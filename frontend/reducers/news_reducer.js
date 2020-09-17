import { RECEIVE_NEWS } from './../actions/graph_actions'

export const newsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_NEWS:
            debugger
            return Object.assign({}, nextState, action.news)
        default:
            return state;
    }
}