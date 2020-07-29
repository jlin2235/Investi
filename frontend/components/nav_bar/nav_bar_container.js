import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import GreetingPage from './nav_bar';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id] 
        //currentUser will find all the Users and we key into it with session.id(current user ID)
    };
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(msp,mdp)(GreetingPage);
