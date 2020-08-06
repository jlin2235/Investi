
export const fetchProfile = (company) => (
    $.ajax({
        url: `https://sandbox.iexapis.com/stable/stock/${company}/company?token=${window.iexapikey}`,
        method: "GET"
    })
)



export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=stock&pageSize=7&apiKey=${window.newsapikey}`
    })
}



