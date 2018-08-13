class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.date :start_date, null: false
      t.date :end_date, optional: true
      t.time :start_time, null: false
      t.time :end_time, optional: true
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :events, :title
    add_index :events, :user_id
  end
end
