# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  has_many :messages, dependent: :destroy 
  has_many :channel_members, dependent: :destroy
  has_many :users, through: :channel_members 

  validates :name, presence: true, uniqueness: true, case_sensitive: false

  # belongs_to :owner,
  #   primary_key: :id,
  #   foreign_key: :owner_id,
  #   class_name: :User

  # has_many :channel_members,
  #   primary_key: :id,
  #   foreign_key: :channel_id, 
  #   class_name: :ChannelMember

  # has_many :members,
  #   through: :channel_members,
  #   source: :User

  # has_many :messages,
  #   primary_key: :id, 
  #   foreign_key: :messageable_id,
  #   class_name: :Message
end
