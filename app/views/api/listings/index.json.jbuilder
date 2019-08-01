@listings.each do |listing|
  json.set! listing.id do 
    json.partial! 'api/listings/listing', listing: listing
      json.amenities do 
        json.amenities.each do |amenity|
          json.set! amenity.id do
            json.extract! amenity, :name
          end
        end
      end
  end
end