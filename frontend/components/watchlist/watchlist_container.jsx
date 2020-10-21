import { connect } from 'react-redux';
import WatchList from './watchlist'

const msp = state => {

    return {
        currentUser: state.entities.users[state.session.id],
        price: state.entities.prices,
        graphPrices: state.entities.graphPrices,
        // profile: state.entities.profile,
        // transactions: state.entities.transactions,
    }
}
const mdp = dispatch => {
    return {

    }
}



export default connect(msp, mdp)(Portfolio)