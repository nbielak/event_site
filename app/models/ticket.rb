# == Schema Information
#
# Table name: tickets
#
#  id         :bigint(8)        not null, primary key
#  event_id   :integer          not null
#  price      :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Ticket < ApplicationRecord
    validates :name, :event_id, :price, :quantity, presence: true

    belongs_to :event,
        foreign_key: :event_id

    has_one :creator,
        through: :event,
        source: :organizer
    
    has_many :user_tickets,
        dependent: :destroy
    
    def update_ticket_quantity!(dif)
        self.quantity += dif
        self.save!
        self.quantity
    end
end
