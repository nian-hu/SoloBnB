# json.partial! 'api/users/user', user: @user

json.user do 
  json.partial! 'api/users/user', user: @user
end

json.listings do
  @user.listings.each do |listing|
    json.set! listing.id do
      json.partial! 'api/listings/listing', listing: listing  
    end 
  end 
end 