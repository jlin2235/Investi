import { RECEIVE_TRANSACTION_ERRORS,
            CLEAR_TRANSACTION_ERRORS,
        RECEIVE_TRANSACTION_SUCCESS
        } from'../../actions/transaction_actions'

export default (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type){
        case RECEIVE_TRANSACTION_ERRORS:
            debugger
            return action.errors;
        case CLEAR_TRANSACTION_ERRORS:
            debugger
            return [];
        case RECEIVE_TRANSACTION_SUCCESS:
            debugger
            return ['Transaction Success']
        default:
            return oldState
    }
}