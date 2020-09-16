import { connect } from 'react-redux'
import HomeForm from './home'
import {receiveFiveMin, receiveThirtyMin, receiveFiveYr, receiveNews} from'../../actions/graph_actions'
import { receivePrice } from'../../actions/search_actions'



const msp = state => ({
    currentUser: state.entities.users[state.session.id],
    //currentUser will find all the Users and we key into it with session.id(current user ID from the STATE)
    cash

})