export const createNewWatchList = watchList => (
    $.ajax({
        url: "/api/watchlists",
        method: "POST",
        data: { watchList }
    })
)

export const getAllWatchLists = watchList => (
    $.ajax({
        url: "/api/watchlists",
        method: "GET",
        data: { watchList }
    })
)