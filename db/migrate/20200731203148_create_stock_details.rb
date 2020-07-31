class CreateStockDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :stock_details do |t|
      t.string :company, null:false
      t.string :symbol, null:false
      t.timestamps
    end
  end
end
