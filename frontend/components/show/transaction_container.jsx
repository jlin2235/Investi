import { connect } from 'react-redux';
import TransactionForm from './transaction_form'
import { receivePrices, receiveProfile, receivePrice } from '../../actions/search_actions'
import { getAllTransaction, 
            getOneTran, 
            updateUserBal,
            createTransaction,
            clearTransErrors,
         } from '../../actions/transaction_actions';




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
    // receiveProfile: company => dispatch(receiveProfile(company)),
    // receivePrices: symbols => dispatch(receivePrices(symbols)),
    // receivePrice: symbol => dispatch(receivePrice(symbol)),
    // getAllTransaction: transaction => dispatch(getAllTransaction(transaction)),
    getOneTran: transaction => dispatch(getOneTran(transaction)),
    updateUserBal: transaction => dispatch(updateUserBal(transaction)),
    createTransaction: transaction => dispatch(createTransaction(transaction)),
    clearTransErrors: () => dispatch(clearTransErrors())


})

export default connect(msp,mdp)(TransactionForm)