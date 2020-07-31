class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :portfolio_id, null:false
      t.integer :stock_id, null:false
      t.integer :purchase_price, null:false
      t.integer :shares, null:false
      t.timestamps
    end

    add_index :transactions, :portfolio_id, unique:true
    add_index :transactions, :stock_id, unique:true
    
  end
end
