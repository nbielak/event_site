class AddNameToTickets < ActiveRecord::Migration[5.1]
  def change
    add_column :tickets, :name, :string
  end
end
