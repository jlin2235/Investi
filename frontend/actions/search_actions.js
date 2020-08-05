import * as SEARCHAPIUtil  from '../util/search_api_util'

export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';


const receiveProfileHelperMethod = (profile) => {
    debugger
    return{
    type: RECEIVE_PROFILE,
    profile
    }
};
const receiveNewsHelperMethod = (news) => {
    debugger
    return{
        type: RECEIVE_NEWS,
        news
    }
};

// const receiveStocks = (stocks) => ({
//     type: RECEIVE_STOCKS,
//     stocks
// });

// export const receiveALLStocks = () => dispatch => (
//     SEARCHAPIUtil.fetchStocks()
//     .then(stocks => dispatch(receiveStocks(stocks)))
// );

export const receiveProfile = (company) => dispatch => {
    debugger
    return SEARCHAPIUtil.fetchProfile(company)
        .then(profile => {
            debugger
            return dispatch(receiveProfileHelperMethod(profile))
        })
};
export const receivenews = () => dispatch => {
    debugger
    return SEARCHAPIUtil.fetchNews()
        .then(news => {
            debugger
            return dispatch(receiveNewsHelperMethod(news))
        })
};