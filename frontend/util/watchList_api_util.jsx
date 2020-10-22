export const createNewWatchList = watchList => (
    $.ajax({
        url: "/api/watchlists",
        method: "POST",
        data: { watchList }
    })
)

export const deleteWatchList = watchList => {
    debugger
    return $.ajax({
        url: "/api/watchlists/:id",
        method: "DELETE",
        data: { watchList }
    })
}

export const getAllWatchLists = watchList => (
    $.ajax({
        url: "/api/watchlists",
        method: "GET",
        data: { watchList }
    })
)

export const getOneWatchList = watchList => (
    $.ajax({
        url: "/api/watchlists/:id",
        method: "GET",
        data: { watchList }
    })
)