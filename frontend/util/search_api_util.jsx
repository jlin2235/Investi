export const fetchAllNasdaqStocks = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=&exchange=NASDAQ&apikey=${window.Fmpapikey}`,
        method: "GET" 
    })
)

export const fetchAllNYSEStocks = () => (
    $.ajax({
        url: `https://financialmodelingprep.com/api/v3/search?query=&limit=&exchange=nyse&apikey=${window.Fmpapikey}`,
        method: "GET"
    })
);


export const fetchProfile = (company) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${company}/company?token=${window.iexapikey}`,
        method: "GET"
    })
)

export const fetchPrice = (company) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/T/price/${company}?token=${window.iexapikey}`,
        method: 'GET'

    })
)

// TAKEN CARE IN THE NEWS API
// export const fetchNews = () => {
//     return $.ajax({
//         method: "GET",
//         url: `https://newsapi.org/v2/everything?q=stock&pageSize=7&apiKey=${window.newsapikey}`
//     })
// } 




