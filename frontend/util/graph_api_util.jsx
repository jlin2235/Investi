const moment = require('moment');

export const fetchHistoricalChartFiveMin = symbol => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${ticker}?apikey=${window.Fmpapikey}`
    })
)

export const fetchHistoricalChartThirtyMin = symbol => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/30min/${ticker}?apikey=${window.Fmpapikey}`
    })
)

export const fetchHistoricalPriceFiveYr = symbol => {
    let date = new Date();
    let today = moment(date).format('YYYY-MMM-DD');
    let fiveYr = moment().subtract(61, 'months').format('YYYY-MM-DD'); // need an extra month 61 instead of 60

    return $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?from=${fiveYr}&to=${today}&apikey=${window.Fmpapikey}`,
    })
}

export const fetchNews = () => (
    $.ajax({
        url:`/api/news` //comes from controller
    })
)

