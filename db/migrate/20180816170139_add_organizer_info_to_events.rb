class AddOrganizerInfoToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :organizer_name, :string, null: false
    add_column :events, :organizer_description, :text, null: false
  end
end
