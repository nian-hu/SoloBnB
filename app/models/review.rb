# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  listing_id    :integer          not null
#  author_id     :integer          not null
#  body          :text             not null
#  accuracy      :integer          not null
#  communication :integer          not null
#  cleanliness   :integer          not null
#  location      :integer          not null
#  check_in      :integer          not null
#  value         :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :listing_id, :author_id, :body, :accuracy, :communication, :cleanliness, :location, :check_in, :value, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User 

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id, 
    class_name: :Listing
  
end
