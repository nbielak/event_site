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
#

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
