class Portfolio < ApplicationRecord
    validates :user_id, null:false
    validates :stock_details_id, null:false
    validates :num_shares, null:false

    belongs_to :user


end
