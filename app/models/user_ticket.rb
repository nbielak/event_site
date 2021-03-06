# == Schema Information
#
# Table name: user_tickets
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  ticket_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserTicket < ApplicationRecord
    validates :user_id, :ticket_id, presence: true

    belongs_to :user,
        foreign_key: :user_id
    
    belongs_to :ticket,
        foreign_key: :ticket_id

    has_one :event,
        through: :ticket,
        source: :event_id

end
