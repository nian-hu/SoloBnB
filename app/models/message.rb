# == Schema Information
#
# Table name: messages
#
#  id             :bigint           not null, primary key
#  body           :string           not null
#  author_id      :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  messageable_id :integer
#

class Message < ApplicationRecord
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User 

  belongs_to :channel,
    primary_key: :id, 
    foreign_key: :messageable_id,
    class_name: :Channel
end
