# == Schema Information
#
# Table name: channel_members
#
#  id         :bigint           not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMember < ApplicationRecord
  # belongs_to :user,
  #   primary_key: :id,
  #   foreign_key: :user_id,
  #   class_name: :User 

  # belongs_to :channel,
  #   primary_key: :id,
  #   foreign_key: :channel_id,
  #   class_name: :Channel
end
