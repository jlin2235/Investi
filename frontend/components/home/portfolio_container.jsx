import { connect } from 'react-redux';
import { deleteWatch } from '../../actions/watchlist_actions'
import Portfolio from './portfolio'

const msp = state => {
     
    return {
        currentUser: state.entities.users[state.session.id],
        price: state.entities.prices,
        graphPrices: state.entities.graphPrices,
        profile: state.entities.profile,
        transactions: state.entities.transactions,
        watchlist: state.entities.watchlist
    }
}
const mdp = dispatch => {
    return {
        deleteWatch: watchlist => dispatch(deleteWatch(watchlist)),

        // receiveFiveMin: symbol => (dispatch(receiveFiveMin(symbol)))
    }
}



export default connect(msp, mdp)(Portfolio)