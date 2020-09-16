class Transaction < ApplicationRecord

    validates :purchase_price, :shares, :user_id, :symbols, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end
