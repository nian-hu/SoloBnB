json.listing do
  json.partial! 'api/listings/listing', listing: @listing
end

json.amenities do 
  @listing.amenities.each do |amenity|
    json.set! amenity.id do  
      json.extract! amenity, :id, :name
    end
  end
end