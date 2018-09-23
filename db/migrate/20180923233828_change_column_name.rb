class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :user_tickets, :event_id, :ticket_id
  end
end
