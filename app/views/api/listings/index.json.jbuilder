@listings.each do |listing|
  # debugger
  json.set! listing.id do 
    json.partial! 'api/listings/listing', listing: listing
    # json.amenity_ids listing.amenity_ids
    # json.booking_ids listing.booking_ids 
    # json.review_ids listing.review_ids
  end
end