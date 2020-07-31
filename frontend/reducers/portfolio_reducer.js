import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions'

import { merge } from 'lodash'

const portfolioReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = merge({}, oldState)

    switch (action.type) {
        case RECEIVE_PORTFOLIO:
            return action.portfolio
        default:
            return oldState

    }

}

export default portfolioReducer