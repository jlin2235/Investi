import { updateUserBalance,
        createNewTransaction,
        getAllTransactions,
        getOneTransaction,
        showUser } from '../util/transaction_api_util'

export const UPDATE_USER_BALANCE = 'UPDATE_USER_BALANCE';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const GET_ALL_TRANSACTIONS = 'GET_ALL_TRANSACTIONS';
export const GET_ONE_TRANSACTION = 'GET_ONE_TRANSACTION';
export const GET_USER = 'GET_USER';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';
export const CLEAR_TRANSACTION_ERRORS = 'CLEAR_TRANSACTION_ERRORS';
export const RECEIVE_TRANSACTION_SUCCESS = 'RECEIVE_TRANSACTION_SUCCESS'


const updateUserBalanceHelperMethod = transaction => ({
    type: UPDATE_USER_BALANCE,
    transaction
});

const createTransactionHelperMethod = transaction => ({
    type: CREATE_TRANSACTION,
    transaction
})

const getAllTransactionHelperMethod = transactions => ({
    type: GET_ALL_TRANSACTIONS,
    transactions
})

const getOneTransactionHelperMethod = transaction => ({
    type: GET_ONE_TRANSACTION,
    transaction
})

const getUserHelperMethod = user => ({
    type: GET_USER,
    user
})

const receiveSuccessMessageHelperMethod = () => {
    debugger 
    return {type: RECEIVE_TRANSACTION_SUCCESS}
}

//if there is a problem with creating the transction

const receiveTransactionErrorsHelperMethod = (errors) => {
    return{   
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
 }
}

const clearTransactionErrors = () => ({
    type: CLEAR_TRANSACTION_ERRORS
})


export const updateUserBal = transaction => dispatch => updateUserBalance(transaction)
    .then(transaction => (dispatch(updateUserBalanceHelperMethod(transaction))),
            errors => (dispatch(receiveTransactionErrorsHelperMethod(errors.responseJSON))))
    

export const createTransaction = transaction => dispatch => createNewTransaction(transaction)
    .then(transaction => (dispatch(createTransactionHelperMethod(transaction))),
        errors => (dispatch(receiveTransactionErrorsHelperMethod(errors.responseJSON))))

export const getAllTransaction = transaction => dispatch => getAllTransactions(transaction)
    .then(transactions =>  {
        
        return dispatch(getAllTransactionHelperMethod(transactions))
    })

export const getOneTran = transaction => dispatch => getOneTransaction(transaction)
    .then(transaction => {
        
        return dispatch(getOneTransactionHelperMethod(transaction))
    })

// export const getUser = transaction => dispatch => showUser(transaction)
//     .then(user => dispatch(getUserHelperMethod(user)))

export const receiveSuccessMessage = () => dispatch => dispatch(receiveSuccessMessageHelperMethod())

export const clearTransErrors = () => dispatch =>  dispatch(clearTransactionErrors());


