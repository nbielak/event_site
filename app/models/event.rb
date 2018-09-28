# == Schema Information
#
# Table name: events
#
#  id                    :bigint(8)        not null, primary key
#  title                 :string           not null
#  description           :text             not null
#  start_date            :date             not null
#  end_date              :date
#  start_time            :time             not null
#  end_time              :time
#  user_id               :integer          not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  venue_name            :string
#  address               :string
#  address2              :string
#  city                  :string
#  state                 :string
#  zip                   :integer
#  country               :string
#  organizer_name        :string           not null
#  organizer_description :text             not null
#

class Event < ApplicationRecord
  validates :title,
    :description,
    :address,
    :city,
    :state,
    :zip,
    :country,
    :start_date,
    :start_time,
    :user_id,
    :organizer_name,
    :organizer_description,
    presence: true

  belongs_to :organizer,
    foreign_key: :user_id,
    class_name: :User

  has_many :tickets,
    dependent: :destroy

  has_one_attached :photo

end
