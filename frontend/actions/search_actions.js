import * as SEARCHAPIUtil  from '../util/search_api_util'
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_PRICE = 'RECEIVE_PRICE';
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

const receivePrice = (price) => {
    return{
        type: RECEIVE_PRICE,
        price
    }
}


// const receiveNewsHelperMethod = (news) => {
//     debugger
//     return{
//         type: RECEIVE_NEWS,
//         news
//     }
// };

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
        .then(price => dispatch(receivePrice(price)))
}
// export const receivenews = () => dispatch => {
//     debugger
//     return SEARCHAPIUtil.fetchNews()
//         .then(news => {
//             debugger
//             return dispatch(receiveNewsHelperMethod(news))
//         })
// };