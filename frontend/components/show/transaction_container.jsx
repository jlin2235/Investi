import { connect } from 'react-redux';
import TransactionForm from './transaction_form'
import { receivePrice, receiveProfile } from '../../actions/search_actions'



const msp = state => ({
    profile: state.entities.profile,
    currentUser: state.entities.users[state.session.id]

})

const mdp = dispatch => ({
    receiveProfile: company => dispatch(receiveProfile(company)) 
})

export default connect(msp,mdp)(TransactionForm)