class EditTransactionTable < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :user_id, :integer, null:false
    remove_column :transactions, :portfolio_id
    remove_column :transactions, :stock_id

  end
end
