class CreateAddressForEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :location
    add_column :events, :venue_name, :string, optional: true
    add_column :events, :address, :string
    add_column :events, :address2, :string, optional: true
    add_column :events, :city, :string
    add_column :events, :state, :string
    add_column :events, :zip, :integer
    add_column :events, :country, :string
    add_column :events, :lat, :float
    add_column :events, :lng, :float

    add_index :events, :venue_name
    add_index :events, :address
  end
end
