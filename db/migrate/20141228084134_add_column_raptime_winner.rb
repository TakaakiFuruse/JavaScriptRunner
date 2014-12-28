class AddColumnRaptimeWinner < ActiveRecord::Migration
  def change
    add_column :users, :raptime, :string
    add_column :users, :winner, :string
  end
end
