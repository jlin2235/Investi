class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :user_id, null:false
      t.integer :stock_details_id, null:false
      t.float :num_shares, null:false
      t.timestamps
    end
    add_index :portfolios, :user_id, unique:true
    add_index :portfolios, :stock_details_id, unique:true
  end
end
