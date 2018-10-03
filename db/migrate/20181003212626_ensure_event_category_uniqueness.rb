class EnsureEventCategoryUniqueness < ActiveRecord::Migration[5.2]
  def change
    add_index :event_categories, [:event_id, :category_id], unique: true
  end
end
