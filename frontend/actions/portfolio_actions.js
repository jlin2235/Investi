import * as PortfolioApiUtil from '../util/portfolio_api_util'

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO"

const receivePortfolio = (portfolio) => {
    return {
        type: RECEIVE_PORTFOLIO,
        portfolio
    }
}

export const fetchPortfolio = portfolioId => dispatch => (
        PortfolioApiUtil.fetchPortfolio(portfolioId)
            .then(portfolio => dispatch(receivePortfolio(portfolio))
    ))
