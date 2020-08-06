import { connect } from 'react-redux';
import NEWS from './news';
import { receivenews } from '../../actions/search_actions'

const msp = (state, ownprops) => {
    return {
        // currentUser: state.entities.users[state.session.id]
        //currentUser will find all the Users and we key into it with session.id(current user ID)
        news: state.entities.news
    };
};

const mdp = dispatch => ({
    // logout: () => dispatch(logout())
    receivenews: () => dispatch(receivenews())
});


export default connect(msp, mdp)(NEWS);