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
end