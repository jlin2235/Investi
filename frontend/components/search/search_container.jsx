import { connect } from 'react-redux';
import SearchBar from './search';
import { receiveProfile, receiveStocks } from '../../actions/search_actions'

const msp = (state,ownprops) => {
    return {
        stocks: state.entities.stocks
    };
};

const mdp = dispatch => ({
    receiveProfile: company => dispatch(receiveProfile(company)),
    receiveStocks: () => dispatch(receiveStocks())
});


export default connect(msp, mdp)(SearchBar);