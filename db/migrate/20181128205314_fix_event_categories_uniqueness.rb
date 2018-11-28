class FixEventCategoriesUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :event_categories, :category_id
    add_index :event_categories, :category_id
  end
end
