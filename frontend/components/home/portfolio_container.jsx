import { connect } from 'react-redux';
// import { receivePrice } from '../../actions/search_actions';
import { receiveFiveMin } from '../../actions/graph_actions'
import Portfolio from './portfolio'

const msp = state => {
     
    return {
        currentUser: state.entities.users[state.session.id],
        price: state.entities.prices,
        graphPrices: state.entities.graphPrices,
        profile: state.entities.profile,
        transactions: state.entities.transactions,
    }
}
const mdp = dispatch => {
    return {
        // receivePrice: symbol => dispatch(receivePrice(symbol)),
        // receiveFiveMin: symbol => (dispatch(receiveFiveMin(symbol)))
    }
}



export default connect(msp, mdp)(Portfolio)