import { connect } from 'react-redux';
import Show from './show';
import { receiveFiveMin, receiveThirtyMin, receiveFiveYr, receiveNews } from '../../actions/graph_actions'
import { receivePrice, receiveProfile } from '../../actions/search_actions'
import { getOneTran } from '../../actions/transaction_actions';
import { getWatchList } from '../../actions/watchlist.actions'


const msp = (state, ownProps) => {
    //  
    return {
        symbol: ownProps.match.params.symbol,
        profile: state.entities.profile,
        news: state.entities.news,
        currentUser: state.entities.users[state.session.id]
        //currentUser will find all the Users and we key into it with session.id(current user ID)
    };
};

const mdp = dispatch => {
    //  
    return{
        receiveProfile: company => dispatch(receiveProfile(company)),
        receiveNews: () => dispatch(receiveNews()),
        receiveFiveMin: company => dispatch(receiveFiveMin(company)),
        receiveThirtyMin: company => (dispatch(receiveThirtyMin(company))),
        receiveFiveYr: company => (dispatch(receiveFiveYr(company))),
        receivePrice: company => (dispatch(receivePrice(company))),
        getWatchList: watchlist => dispatch(getWatchList(watchlist)),
        getOneTran: transaction => dispatch(getOneTran(transaction)),

    }

};


export default connect(msp, mdp)(Show);