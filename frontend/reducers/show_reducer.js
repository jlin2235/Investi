import { RECEIVE_PROFILE } from './../actions/search_actions'

export const profileReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PROFILE:
            //  
            return Object.assign({},nextState, action.profile)
            // nextState[profile.symbol] = profile
            // return nextState
        default:
            return state;
    }
}