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

json.bookings do 
  @listing.bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking, :id, :listing_id, :guest_id, :start_date, :end_date
    end
  end
end

json.reviews do 
  @listing.reviews.each do |review|
    json.set! review.id do 
      json.partial! 'api/reviews/review', review: review
    end
  end
end

json.host do 
  json.set! @listing.host_id do
    json.partial! 'api/users/user', user: @listing.host
  end
end