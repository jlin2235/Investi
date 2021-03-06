# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_20_171525) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "portfolios", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "stock_details_id", null: false
    t.float "num_shares", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_details_id"], name: "index_portfolios_on_stock_details_id", unique: true
    t.index ["user_id"], name: "index_portfolios_on_user_id", unique: true
  end

  create_table "stock_details", force: :cascade do |t|
    t.string "company", null: false
    t.string "symbol", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "purchase_price", null: false
    t.integer "shares", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.string "symbols", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "balance", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["password_digest"], name: "index_users_on_password_digest", unique: true
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "symbols", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

end
