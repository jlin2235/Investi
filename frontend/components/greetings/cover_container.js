


import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import Cover from './cover'

// const mapStateToProps = ({ error }) => {
//     return ({
//         errors: error.session,
//         formType: 'Sign In',
//         // navLink: <Link to="/signup">sign up instead</Link>,
//     });
// };

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
    };
};

export default connect(null, mapDispatchToProps)(Cover);
