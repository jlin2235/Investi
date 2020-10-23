import { connect } from 'react-redux'
import { getAllTransaction } from '../../actions/transaction_actions'
import { receiveFiveMinBatch, 
        FiveDaysTenMinBatchPricesIEX, 
        receiveNews,
        FiveYearBatchPricesIEX } from '../../actions/graph_actions'
import { receivePrices } from '../../actions/search_actions'
import { getWatchLists, getWatchList } from '../../actions/watchlist_actions'

import HomeForm from './home'



const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    //currentUser will find all the Users and we key into it with session.id(current user ID from the STATE)
    news: state.entities.news,
    graphPrices: state.entities.graphPrices


})

const mdp = dispatch => {
    return {
        receiveNews: () => dispatch(receiveNews()),
        getAllTransaction: transaction => dispatch(getAllTransaction(transaction)),
        receivePrices: symbols => dispatch(receivePrices(symbols)),
        receiveFiveMinBatch: symbol => dispatch(receiveFiveMinBatch(symbol)),
        FiveDaysTenMinBatchPricesIEX: symbols => dispatch(FiveDaysTenMinBatchPricesIEX(symbols)),
        FiveYearBatchPricesIEX: symbols => dispatch(FiveYearBatchPricesIEX(symbols)),
        getWatchLists: watchlist => dispatch(getWatchLists(watchlist))
    }
}

export default connect (msp, mdp)(HomeForm);
