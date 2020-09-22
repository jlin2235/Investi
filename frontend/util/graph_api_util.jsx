const moment = require('moment');

export const fetchHistoricalChartFiveMin = symbol => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?apikey=${window.Fmpapikey}`
    })
)

export const fetchHistoricalChartThirtyMin = symbol => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/30min/${symbol}?apikey=${window.Fmpapikey}`
    })
)

export const fetchHistoricalPriceFiveYr = symbol => {
    let date = new Date();
    let today = moment(date).format('YYYY-MMM-DD');
    let fiveYr = moment().subtract(61, 'months').format('YYYY-MM-DD'); // need an extra month 61 instead of 60

    return $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${fiveYr}&to=${today}&apikey=${window.Fmpapikey}`,
    })
}

export const fetchNews = () => (
    $.ajax({
        url:`/api/news` //comes from controller
    })
)

export const fetchHistoricalChartFiveDaysTenMinBatch = companies => {
    let symbols = '';
    symbols += companies[0];
    companies.slice(1).forEach(company => {
        symbols += `,${company}`
    })

    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?&types=price,quote,chart&symbols=${symbols}&token=${window.iexapikey}&range=5dm`
    })
}

