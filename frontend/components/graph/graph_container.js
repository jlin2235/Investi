import { connect } from 'react-redux';
import Graph from './graph';
import { getAllTransaction } from '../../actions/transaction_actions';
import { receivePrices } from '../../actions/search_actions'

const msp = state => {
    debugger
    return {
    currentUser: state.entities.users[state.session.id],
    transactions: state.entities.transactions,
    prices: state.entities.prices,
    graphPrices: state.entities.graphPrices
        
    }

}

const mdp = dispatch => ({
    // getAllTransaction: transaction => dispatch(getAllTransaction(transaction)),
    // receivePrices: symbols => dispatch(receivePrices(symbols))
})

export default connect(msp, mdp)(Graph);