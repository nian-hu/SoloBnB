json.extract! user, :id, :fname, :lname, :email

if user.photo.attached?
  json.photoUrl url_for(user.photo) 
end
