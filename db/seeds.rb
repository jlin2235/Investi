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
    balance: 10000,
    password:"demopassword"
)


transaction_1 = Transaction.create!(user_id:demoUser.id, symbols:'T', purchase_price:32, shares:2)
transaction_1 = Transaction.create!(user_id:demoUser.id, symbols:'UBER', purchase_price:30, shares:2)
transaction_1 = Transaction.create!(user_id:demoUser.id, symbols:'GOOG', purchase_price:1567, shares:2)
transaction_1 = Transaction.create!(user_id:demoUser.id, symbols:'TSLA', purchase_price:320, shares:2)
# transaction_2 = Transaction.create!(user_id:demoUser.id, symbols:'T', purchase_price:30, shares:2)
# transaction_3 = Transaction.create!(user_id:demoUser.id, symbols:'T', purchase_price:-29, shares:10)
# transaction_4 = Transaction.create!(user_id:demoUser.id, symbols:'T', purchase_price:-30, shares:5)
# transaction_5 = Transaction.create!(user_id:demoUser.id, symbols:'UBER', purchase_price:-28, shares:20)
# transaction_6 = Transaction.create!(user_id:demoUser.id, symbols:'UBER', purchase_price:32, shares:2)
# transaction_7 = Transaction.create!(user_id:demoUser.id, symbols:'T', purchase_price:-32, shares:15)

# stock_1 = StockDetail.create!(symbol:'T', company:'AT&T Inc')
# stock_2 = StockDetail.create!(symbol: "UBER", company: "Uber Technologies Inc")
# stock_3 = StockDetail.create!(symbol: "GOOG", company: "Alphabet Cl C")
# stock_4 = StockDetail.create!(symbol: "FB", company: "Facebook Inc")
# stock_5 = StockDetail.create!(symbol: "AMZN", company: "Amazon.com Inc")
# stock_6 = StockDetail.create!(symbol: "MSFT", company: "Microsoft Corp")
# stock_7 = StockDetail.create!(symbol: "MORN", company: "Morningstar Inc")
# stock_8 = StockDetail.create!(symbol: "ADBE", company: "Adobe Systems Inc")
# stock_9 = StockDetail.create!(symbol: "NVDA", company: "Nvidia Corp")
# stock_10 = StockDetail.create!(symbol: "INTC", company: "Intel Corp")
# stock_11 = StockDetail.create!(symbol: "CRM", company: "Salesforce.com Inc")
# stock_12 = StockDetail.create!(symbol: "PYPL", company: "Paypal Holdings")
# stock_13 = StockDetail.create!(symbol: "PG", company: "Procter & Gamble Company")
# stock_14 = StockDetail.create!(symbol: "INTU", company: "Intuit Inc")
# stock_15 = StockDetail.create!(symbol: "WDAY", company: "Workday Inc")
# stock_16 = StockDetail.create!(symbol: "KEYS", company: "Keysight Technologies Inc Comm")
# stock_17 = StockDetail.create!(symbol: "HPE", company: "Hewlett Packard Enterprise Comp")
# stock_18 = StockDetail.create!(symbol: "TSLA", company: "Tesla Inc")
# stock_19 = StockDetail.create!(symbol: "GM", company: "General Motors Company")
# stock_20 = StockDetail.create!(symbol: "VZ", company: "Verizon Communications Inc")
# stock_21 = StockDetail.create!(symbol: "IBM", company: "International Business Machines")
# stock_22 = StockDetail.create!(symbol: "ACN", company: "Accenture Plc")
# stock_23 = StockDetail.create!(symbol: "ES", company: "Eversource Energy")
# stock_24 = StockDetail.create!(symbol: "CBRE", company: "CBRE Group Inc")
# stock_25 = StockDetail.create!(symbol: "V", company: "Visa Inc")

