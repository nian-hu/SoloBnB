json.extract! listing, :id, :host_id, :title, :description, :address, :city, :lat, :long, :price, :amenity_ids

if listing.photos.attached?
  # debugger
  json.photoUrls listing.photos.map { |file| url_for(file) }
end
