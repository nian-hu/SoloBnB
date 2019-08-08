# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer
#  channel_id :integer
#

class Message < ApplicationRecord

  # belongs_to :user,
  #   primary_key: :id,
  #   foreign_key: :author_id,
  #   class_name: :User 

  # belongs_to :channel,
  #   primary_key: :id, 
  #   foreign_key: :channel_id,
  #   class_name: :Channel
end
