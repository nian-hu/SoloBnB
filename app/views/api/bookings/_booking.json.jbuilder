json.extract! booking, :id, :listing_id, :guest_id, :start_date, :end_date

json.listing do
  json.partial! 'api/listings/listing', listing: booking.listing
end