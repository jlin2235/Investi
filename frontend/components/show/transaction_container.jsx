import { connect } from 'react-redux';
import TransactionForm from './transaction_form'
// import { receivePrices, receiveProfile, receivePrice } from '../../actions/search_actions'
import {    getOneTran, 
            updateUserBal,
            createTransaction,
            clearTransErrors,
            receiveSuccessMessage,
         } from '../../actions/transaction_actions';
import { TESTFiveDaysTenMinBatchPricesIEX, TESTFiveYearBatchPricesIEX } from './../../actions/graph_actions'

import { createWatchList, getWatchList, deleteWatch } from '../../actions/watchlist.actions'



const msp = (state,ownProps) => {
     
    return{
    symbol: state.entities.profile.symbol,
    profile: state.entities.profile,
    currentUser: state.entities.users[state.session.id],
    prices: state.entities.prices,
    transactions: state.entities.transactions,
    errors: state.error.transaction
    }

}

const mdp = dispatch => ({
    getOneTran: transaction => dispatch(getOneTran(transaction)),
    updateUserBal: transaction => dispatch(updateUserBal(transaction)),
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    clearTransErrors: () => dispatch(clearTransErrors()),
    receiveSuccessMessage: () => dispatch(receiveSuccessMessage()),
    clearTransErrors: () => dispatch(clearTransErrors()),
    createWatch: watchlist => dispatch(createWatchList(watchlist)),
    getWatchList: watchlist => dispatch(getWatchList(watchlist)),
    deleteWatch: watchlist => dispatch(deleteWatch(watchlist)),
    TESTFiveDaysTenMinBatchPricesIEX: symbols => dispatch(TESTFiveDaysTenMinBatchPricesIEX(symbols)),
    TESTFiveYearBatchPricesIEX: symbols => dispatch(TESTFiveYearBatchPricesIEX(symbols)),

})

export default connect(msp,mdp)(TransactionForm)