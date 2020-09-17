json.set! transaction.symbols do 
    json.extract! transaction, :id, :purchase_price, :shares, :user_id, :symbols
end

