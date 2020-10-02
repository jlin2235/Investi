import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({id: null});

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER: //SIGNING THE USER IN
            //  
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser; //AFTER THE USER IS LOGGED OUT THE THE ID IS NULL
        default:
            return oldState;
    }
};

export default sessionReducer;
