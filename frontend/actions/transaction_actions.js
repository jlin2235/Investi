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


export const updateUserBal = transaction => dispatch => updateUserBalance(transaction)
    .then(transaction => dispatch(updateUserBalanceHelperMethod(transaction)))

export const createTransaction = transaction => dispatch => createNewTransaction(transaction)
    .then(transaction => dispatch(createTransactionHelperMethod(transaction)))

export const getAllTransaction = transaction => dispatch => getAllTransactions(transaction)
    .then(transactions =>  {
        debugger
        return dispatch(getAllTransactionHelperMethod(transactions))
    })

export const getOneTran = transaction => dispatch => getOneTransaction(transaction)
    .then(transaction => {
        debugger
        return dispatch(getOneTransactionHelperMethod(transaction))
    })

export const getUser = transaction => dispatch => showUser(transaction)
    .then(user => dispatch(getUserHelperMethod(user)))


