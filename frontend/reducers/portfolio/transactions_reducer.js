import { GET_ALL_TRANSACTIONS,
         GET_ONE_TRANSACTION, 
         CREATE_TRANSACTION } from '../../actions/transaction_actions'

const transactionReducer = (state=[], action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type){
        case GET_ALL_TRANSACTIONS:
            debugger
            return action.transactions;
        case GET_ONE_TRANSACTION:
            return action.transaction;
        case CREATE_TRANSACTION:
            if (action.transaction == undefined) {
                return nextState;
            }else {
                return action.transaction;
            }
        default:
            return state;
    }
}

export default transactionReducer;