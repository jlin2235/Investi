import { fetchHistoricalChartFiveMin,
        fetchHistoricalChartThirtyMin,
        fetchHistoricalPriceFiveYr,
        fetchHistoricalChartFiveDaysTenMinBatchIEX,
        fetchHistoricalChartFiveYearBatchIEX,
        fetchHistoricalChartDynamicBatchIEX,
        fetchNews } from './../util/graph_api_util'

export const RECEIVE_FIVEMIN = 'RECEIVE_FIVEMIN';
export const RECEIVE_FIVEMIN_BATCH = 'RECEIVE_FIVEMIN_BATCH';
export const RECEIVE_THIRTYMIN = 'RECEIVE_THIRTYMIN';
export const RECEIVE_PRICEFIVEYR = 'RECEIVE_PRICEFIVEYR';
export const RECEIVE_FIVEDAYS_TENMIN_BATCH_IEX = 'RECEIVE_FIVEDAYS_TENMIN_BATCH_IEX';
export const RECEIVE_FIVE_YEAR_BATCH_IEX = 'RECEIVE_FIVE_YEAR_BATCH_IEX';
export const RECEIVE_DYNAMIC_BATCH_IEX = 'RECEIVE_DYNAMIC_BATCH_IEX';
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
const fetchHistoricalChartFiveDaysTenMinBatchIEXHelperMethod = prices => {
    debugger
    return {
    type: RECEIVE_FIVEDAYS_TENMIN_BATCH_IEX,
    prices
}}
const fetchHistoricalChartFiveYearBatchIEXHelperMethod = prices => {
    return {
        type: RECEIVE_FIVE_YEAR_BATCH_IEX,
        prices
}}
const fetchHistoricalChartDynamicBatchIEXHelperMethod = prices => {
    return {
        type: RECEIVE_DYNAMIC_BATCH_IEX,
        prices
}}

const fetchNewsHelperMethod = news => {
    return {
    type: RECEIVE_NEWS,
    news
}}

export const receiveFiveMin = symbol => dispatch => fetchHistoricalChartFiveMin(symbol)
    .then(prices => {
        dispatch(fetchHistoricalChartFiveMinHelperMethod(prices))}  
)

export const receiveFiveMinBatch = symbols => dispatch => fetchHistoricalChartFiveMin(symbols)
    .then(prices => {
        dispatch(fetchHistoricalChartFiveMinBatchHelperMethod({prices,symbols}))

})

export const receiveThirtyMin = ticker => dispatch => fetchHistoricalChartThirtyMin(ticker)
    .then(prices => {
        dispatch(fetchHistoricalChartThirtyMinHelperMethod(prices))}
)

export const receiveFiveYr = ticker => dispatch => fetchHistoricalPriceFiveYr(ticker)
    .then(prices => {
        dispatch(fetchHistoricalPriceFiveYrHelperMethod(prices))}
)

export const FiveDaysTenMinBatchPricesIEX = tickers => dispatch => fetchHistoricalChartFiveDaysTenMinBatchIEX(tickers)
    .then(prices => {
        debugger
        return dispatch(fetchHistoricalChartFiveDaysTenMinBatchIEXHelperMethod(prices))});

export const FiveYearBatchPricesIEX = tickers => dispatch => fetchHistoricalChartFiveYearBatchIEX(tickers)
    .then(prices => {
        dispatch(fetchHistoricalChartFiveYearBatchIEXHelperMethod(prices))
});
export const DynamicBatchPricesIEX = tickers => dispatch => fetchHistoricalChartDynamicBatchIEX(tickers)
    .then(prices => {
        dispatch(fetchHistoricalChartDynamicBatchIEXHelperMethod(prices))
});

export const receiveNews = () => dispatch => fetchNews()
    .then(news => dispatch(fetchNewsHelperMethod(news)))