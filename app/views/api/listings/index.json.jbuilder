@listings.each do |listing|
  # debugger
  json.set! listing.id do 
    json.partial! 'api/listings/listing', listing: listing
    json.amenity_ids listing.amenity_ids
  end
end