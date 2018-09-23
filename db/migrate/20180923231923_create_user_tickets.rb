class CreateUserTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :user_tickets do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end

    add_index :user_tickets, :user_id
    add_index :user_tickets, :event_id
  end
end
