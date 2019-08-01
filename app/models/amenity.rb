# == Schema Information
#
# Table name: amenities
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Amenity < ApplicationRecord
  validates :name, presence: true

  has_many :listing_amenities,
    primary_key: :id, 
    foreign_key: :amenity_id,
    class_name: :ListingAmenity

  has_one :listing,
    through: :listing_amenities, 
    source: :listing
end
