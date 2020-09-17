import { connect } from 'react-redux';
import Show from './show';
import { receiveFiveMin, receiveThirtyMin, receiveFiveYr, receiveNews } from '../../actions/graph_actions'
import { receivePrice, receiveProfile } from '../../actions/search_actions'

const msp = (state, ownProps) => {
    debugger
    return {
        symbol: ownProps.match.params.symbol,
        profile: state.entities.profile,
        news: state.entities.news

        // currentUser: state.entities.users[state.session.id]
        //currentUser will find all the Users and we key into it with session.id(current user ID)
    };
};

const mdp = dispatch => {
    // logout: () => dispatch(logout())
    debugger
    return{
    receiveProfile: company => dispatch(receiveProfile(company)),
    receivenews: () => dispatch(receivenews())
    }

};


export default connect(msp, mdp)(Show);