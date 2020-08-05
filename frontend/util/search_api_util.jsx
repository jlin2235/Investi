export const fetchProfile = (company) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${company}/company?token=Tpk_618155a9bbe14250b43757d057e3ac43`,
        method: "GET"
    })
)

// export const fetchStockPrice = () => (
//    $.ajax({
//         url: `https://sandbox.iexapis.com/stable/stock/${company}/price?token=Tpk_618155a9bbe14250b43757d057e3ac43`,
//         method: "GET"
//     })
// );

export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: 'https://newsapi.org/v2/everything?q=stock&pageSize=7&apiKey=9320909a56f443b285a5653be83b2363'
    })
}



// 9320909a56f443b285a5653be83b2363