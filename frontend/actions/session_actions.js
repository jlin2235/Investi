import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


//ACTION HELPER METHODS RETURN POJOS
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


//if there is a problem with Sign In/ Sign Up
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


//signup the user, calls APIUtil ajax request and pass bact the user then we do two things

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (dispatch(receiveCurrentUser(user))), 
                            errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (dispatch(receiveCurrentUser(user))), 
                            errors => (dispatch(receiveErrors(errors.responseJSON))))
);

export const logout = () => dispatch => (
    APIUtil.logout().then(() => (dispatch(logoutCurrentUser())
    ))
);
