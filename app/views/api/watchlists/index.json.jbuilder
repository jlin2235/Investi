@watchlists.each do |watchlist|
    json.partial! "/api/watchlist/watchlist", watchlist: watchlist
end