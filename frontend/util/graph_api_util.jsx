const moment = require('moment');
// import {sample} from './graph_seed_5m_api_util';

export const fetchHistoricalChartFiveMin = symbol => {
        
    return $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/5min/${symbol}?apikey=${window.Fmpapikey}`
    })
}


export const fetchHistoricalChartThirtyMin = symbol => {
     
    return $.ajax({
        url: `https://financialmodelingprep.com/api/v3/historical-chart/30min/${symbol}?apikey=${window.Fmpapikey}`
    })
}

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

export const fetchHistoricalChartFiveDaysTenMinBatchIEX = companies => {
    let symbols = '';
    symbols += companies[0];
    companies.slice(1).forEach(company => {
        symbols += `,${company}`
    })
     
    return $.ajax({
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${symbols}&token=${window.iexapikey}&range=5dm`
        url: `https://cloud.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${symbols}&token=${window.IexCloudapikey}&range=5dm`
    })
}

export const fetchHistoricalChartFiveYearBatchIEX = companies => {
    let symbols = '';
    symbols += companies[0];
    companies.slice(1).forEach(company => {
        symbols += `,${company}`
    })
     
    return $.ajax({
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${symbols}&token=${window.iexapikey}&range=5y`
        url: `https://cloud.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${symbols}&token=${window.IexCloudapikey}&range=5y`
    })
}

export const fetchHistoricalChartDynamicBatchIEX = companies => {
    let symbols = '';
    symbols += companies[0];
    companies.slice(1).forEach(company => {
        symbols += `,${company}`
    })
     
    return $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${symbols}&token=${window.iexapikey}&range=dynamic`
    })
}








export const TESTfetchHistoricalChartFiveDaysTenMinBatchIEX = company => {
 

    return $.ajax({
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${company}&token=${window.iexapikey}&range=5dm`
        url: `https://cloud.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${symbols}&token=${window.IexCloudapikey}&range=5dm`
    })
}

export const TESTfetchHistoricalChartFiveYearBatchIEX = company => {


    return $.ajax({
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${company}&token=${window.iexapikey}&range=5y`
        url: `https://cloud.iexapis.com/stable/stock/market/batch?&types=chart&symbols=${symbols}&token=${window.IexCloudapikey}&range=5y`
    })
}