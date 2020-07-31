import { connect } from 'react-redux'
import { fetchPortfolio } from './../../actions/portfolio_actions'
import HomeForm from './home'

const msp = state => ({
    portfolio: state.entities.portfolio
});

const mdp = dispatch => ({
    fetchPortfolio: portfolioId => dispatch(fetchPortfolio(portfolioId))
});

export default connect(msp,mdp)(HomeForm)