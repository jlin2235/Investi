import { connect } from 'react-redux';
import SearchBar from './search';
import { receiveProfile } from './../../actions/search_actions'

const msp = (state,ownprops) => {
    return {
        // currentUser: state.entities.users[state.session.id]
        //currentUser will find all the Users and we key into it with session.id(current user ID)
    };
};

const mdp = dispatch => ({
    // logout: () => dispatch(logout())
    receiveProfile: company => dispatch(receiveProfile(company))
});


export default connect(msp, mdp)(SearchBar);