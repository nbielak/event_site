# == Schema Information
#
# Table name: categories
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Category < ApplicationRecord
    validates :name, :description, presence: true
    validates :name, uniqueness: true

    has_many :event_categories

    has_many :events,
        through: :event_categories,
        source: :event
end
