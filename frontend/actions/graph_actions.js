import { fetchHistoricalChartFiveMin,
        fetchHistoricalChartThirtyMin,
        fetchHistoricalPriceFiveYr,
        // fetchHistoricalChartFiveDaysTenMinBatch,
        fetchNews } from './../util/graph_api_util'

export const RECEIVE_FIVEMIN = 'RECEIVE_FIVEMIN';
export const RECEIVE_FIVEMIN_BATCH = 'RECEIVE_FIVEMIN_BATCH';
export const RECEIVE_THIRTYMIN = 'RECEIVE_THIRTYMIN';
export const RECEIVE_PRICEFIVEYR = 'RECEIVE_PRICEFIVEYR';
export const RECEIVE_FIVEDAYS_TENMIN_BATCH = 'RECEIVE_FIVEDAYS_TENMIN_BATCH';
export const RECEIVE_NEWS = 'RECEIVE_NEWS'; //SINCE ONLY ONE ACTION PUT IT IN HERE

const fetchHistoricalChartFiveMinHelperMethod = prices => ({
    type: RECEIVE_FIVEMIN,
    prices
})

const fetchHistoricalChartFiveMinBatchHelperMethod = prices => ({
    type: RECEIVE_FIVEMIN_BATCH,
    prices
})

const fetchHistoricalChartThirtyMinHelperMethod = prices => ({
    type: RECEIVE_THIRTYMIN,
    prices
})

const fetchHistoricalPriceFiveYrHelperMethod = prices => ({
    type: RECEIVE_PRICEFIVEYR,
    prices
})
// const fetchHistoricalChartFiveDaysTenMinBatchHelperMethod = prices => ({
//     type: RECEIVE_FIVEDAYS_TENMIN_BATCH,
//     prices
// })

const fetchNewsHelperMethod = news => {
    // debugger
    return {
    type: RECEIVE_NEWS,
    news
}}

export const receiveFiveMin = symbol => dispatch => fetchHistoricalChartFiveMin(symbol)
    .then(prices => {
        debugger
        dispatch(fetchHistoricalChartFiveMinHelperMethod(prices))}  
)

export const receiveFiveMinBatch = symbols => dispatch => fetchHistoricalChartFiveMin(symbols)
    .then(prices => {
        debugger
        dispatch(fetchHistoricalChartFiveMinBatchHelperMethod({prices,symbols}))

})

export const receiveThirtyMin = ticker => dispatch => fetchHistoricalChartThirtyMin(ticker)
    .then(prices => {
        debugger
        dispatch(fetchHistoricalChartThirtyMinHelperMethod(prices))}
)

export const receiveFiveYr = ticker => dispatch => fetchHistoricalPriceFiveYr(ticker)
    .then(prices => {
        debugger
        dispatch(fetchHistoricalPriceFiveYrHelperMethod(prices))}
)

// export const FiveDaysTenMinBatchPrices = tickers => dispatch => fetchHistoricalChartFiveDaysTenMinBatch(tickers)
//     .then(prices => dispatch(fetchHistoricalChartFiveDaysTenMinBatchHelperMethod(prices)))

export const receiveNews = () => dispatch => fetchNews()
    .then(news => dispatch(fetchNewsHelperMethod(news)))