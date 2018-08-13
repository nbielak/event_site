# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :text             not null
#  start_date  :date             not null
#  end_date    :date
#  start_time  :time             not null
#  end_time    :time
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  venue_name  :string
#  address     :string
#  address2    :string
#  city        :string
#  state       :string
#  zip         :integer
#  country     :string
#  lat         :float
#  lng         :float
#

class Event < ApplicationRecord
  validates :title,
    :description,
    :address,
    :city,
    :state,
    :zip,
    :country,
    :lat,
    :lng,
    :start_date, 
    :start_time,
    :user_id,
    presence: true

  belongs_to :organizer,
    foreign_key: :user_id,
    class_name: :User

end
