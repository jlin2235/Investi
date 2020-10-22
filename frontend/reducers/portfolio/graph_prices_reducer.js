import {
    RECEIVE_FIVEMIN,
    RECEIVE_THIRTYMIN,
    RECEIVE_PRICEFIVEYR,
    RECEIVE_FIVEMIN_BATCH,
    RECEIVE_FIVEDAYS_TENMIN_BATCH_IEX,
    RECEIVE_FIVE_YEAR_BATCH_IEX,
    RECEIVE_DYNAMIC_BATCH_IEX,
    TESTRECEIVE_FIVE_YEAR_BATCH_IEX,
    TESTRECEIVE_FIVEDAYS_TENMIN_BATCH_IEX
} from '../../actions/graph_actions'


export const graphPricesReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({},oldState);
    switch (action.type) {
        case RECEIVE_FIVEMIN:
             
            nextState['fiveMin'] = action.prices;
            return nextState;
        case RECEIVE_THIRTYMIN:
             
            nextState['thirtyMin'] = action.prices;
            return nextState;
        case RECEIVE_PRICEFIVEYR:
             
            nextState['fiveYr'] = action.prices.historical;
            return nextState;
        case RECEIVE_FIVEMIN_BATCH:
            //  
            nextState[action.prices.symbols] = action.prices.prices

            // let fiveMin = 'fiveMin'
            // nextState[`${fiveMin} ${action.prices.symbols}`] = action.prices.prices;
            return nextState;
        case RECEIVE_FIVEDAYS_TENMIN_BATCH_IEX:
            //  
            nextState['oneWeek'] = action.prices;
            return nextState
        case RECEIVE_FIVE_YEAR_BATCH_IEX:
             
            nextState['fiveYear'] = action.prices;
            return nextState
        // case RECEIVE_DYNAMIC_BATCH_IEX:
        //      
        //     nextState['dynamic'] = action.prices;
        //     return nextState
        case TESTRECEIVE_FIVE_YEAR_BATCH_IEX:
            let oldobject = nextState['fiveYear'] 
            debugger
            nextState['fiveYear'] = Object.assign(oldobject, action.prices)
            return nextState;
        case TESTRECEIVE_FIVEDAYS_TENMIN_BATCH_IEX:
            let oldobject2 = nextState['oneWeek'] 
            debugger
            nextState['oneWeek'] = Object.assign(oldobject2, action.prices)
            return nextState;
        default:
            return oldState;
    }

}