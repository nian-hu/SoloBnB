@listings.each do |listing|
  json.set! listing.id do 
    json.partial! 'api/listings/listing', listing: listing
    json.amenity_ids []
  end
end