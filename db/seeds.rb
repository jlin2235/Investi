# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Transaction.destroy_all
StockDetail.destroy_all

demoUser = User.create!(
    email:"demoUser@gmail.com", 
    first_name:"Lauren", 
    last_name:"Lee", 
    balance: 1000000,
    password:"demopassword"
)


transaction_1 = Transaction.create!(user_id:demoUser.id, symbols:'T', purchase_price:32, shares:2)
transaction_2 = Transaction.create!(user_id:demoUser.id, symbols:'UBER', purchase_price:30, shares:2)
transaction_3 = Transaction.create!(user_id:demoUser.id, symbols:'GOOG', purchase_price:1567, shares:1)
transaction_4 = Transaction.create!(user_id:demoUser.id, symbols:'TSLA', purchase_price:320, shares:2)



watchlist_1 = Watchlist.create!(user_id:demoUser.id, symbols: 'XOM');
watchlist_2 = Watchlist.create!(user_id:demoUser.id, symbols: 'SNAP');
watchlist_3 = Watchlist.create!(user_id:demoUser.id, symbols: 'T');
watchlist_4 = Watchlist.create!(user_id:demoUser.id, symbols: 'AAPL');
watchlist_5 = Watchlist.create!(user_id:demoUser.id, symbols: 'FB');
