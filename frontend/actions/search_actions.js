import * as SEARCHAPIUtil  from '../util/search_api_util'
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_PRICE = 'RECEIVE_PRICE';
export const RECEIVE_PRICES = 'RECEIVE_PRICES';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

const receiveStockHelperMethod = (stocks) => {
    return{
        type: RECEIVE_STOCKS,
        stocks
    }
}

const receiveProfileHelperMethod = (profile) => {
    debugger
    return{
    type: RECEIVE_PROFILE,
    profile
    }
};

const receivePriceHelperMethod = (price) => {
    return{
        type: RECEIVE_PRICE,
        price
    }
}
const receivePricesHelperMethod = (prices) => {
    return{
        type: RECEIVE_PRICES,
        prices
    }
}



export const receiveStocks = () => dispatch => {
    return Promise.all([SEARCHAPIUtil.fetchAllNasdaqStocks(), SEARCHAPIUtil.fetchAllNYSEStocks()])
        .then(stocks => 
            {dispatch(receiveStockHelperMethod(stocks.flat()))
        })
};

export const receiveProfile = (company) => dispatch => {
    debugger
    return SEARCHAPIUtil.fetchProfile(company)
        .then(profile => {
            debugger
            return dispatch(receiveProfileHelperMethod(profile))
        })
};

export const receivePrice = (company) => {
    return SEARCHAPIUtil.fetchPrice(company)
        .then(price => dispatch(receivePriceHelperMethod(price)))
}

export const receivePrices = (companies) => {
    return SEARCHAPIUtil.fetchBatchPrice(companies)
        .then(prices => dispatch(receivePricesHelperMethod(prices)))
}
