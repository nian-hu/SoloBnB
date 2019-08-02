# == Schema Information
#
# Table name: listing_amenities
#
#  id         :bigint           not null, primary key
#  listing_id :integer          not null
#  amenity_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ListingAmenity < ApplicationRecord
  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id, 
    class_name: :Listing

  belongs_to :amenity,
    primary_key: :id,
    foreign_key: :amenity_id, 
    class_name: :Amenity
end
