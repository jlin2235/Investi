@watchlists.each do |watchlist|
    json.partial! "/api/watchlists/watchlist", watchlist: watchlist
end