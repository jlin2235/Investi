import { connect } from 'react-redux'
import { getAllTransaction,getUser } from '../../actions/transaction_actions'
import { receiveNews, receiveFiveMin} from '../../actions/graph_actions'
import { receivePrice } from '../../actions/search_actions'
import HomeForm from './home'



const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    //currentUser will find all the Users and we key into it with session.id(current user ID from the STATE)
    // transactions: state.entities.transactions,
    news: state.entities.news,
    // price: state.entities.price
})

const mdp = dispatch => {
    return {
        receiveNews: () => dispatch(receiveNews())
    }
}

export default connect (msp, mdp)(HomeForm);
