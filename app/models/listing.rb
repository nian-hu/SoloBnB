# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  host_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  address     :string           not null
#  city        :string           not null
#  lat         :float            not null
#  long        :float            not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Listing < ApplicationRecord
  validates :title, :host_id, :description, :lat, :long, :price, presence: true 
  validates :address, presence: true, uniqueness: true

  has_many_attached :photos

  belongs_to :host,
    primary_key: :id, 
    foreign_key: :host_id,
    class_name: :User

  has_many :listing_amenities,
    primary_key: :id, 
    foreign_key: :listing_id, 
    class_name: :ListingAmenity

  has_many :amenities,
    through: :listing_amenities, 
    source: :amenity

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:lng])
        .where("long < ?", bounds[:northEast][:lng])
  end
end
