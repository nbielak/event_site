# == Schema Information
#
# Table name: event_categories
#
#  id          :bigint(8)        not null, primary key
#  event_id    :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class EventCategory < ApplicationRecord
    validates :event_id, :category_id, presence: true, uniqueness: true

    belongs_to :event,
        foreign_key: :event_id

    belongs_to :category,
        foreign_key: :category_id
    
end
