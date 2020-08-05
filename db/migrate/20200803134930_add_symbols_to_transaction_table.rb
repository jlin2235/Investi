class AddSymbolsToTransactionTable < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :symbols, :string, null:false
  end
end
