import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import error from './errors_reducer';

const rootReducer = combineReducers({
    entities,
    session,
    error
});

export default rootReducer;
