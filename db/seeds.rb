# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.destroy_all
Amenity.destroy_all
ListingAmenity.destroy_all
Listing.destroy_all
Channel.destroy_all
ChannelMember.destroy_all



################
#### USERS #####
################


demo = User.create!(email: 'demo_user@gmail.com', 
                    fname: 'Demo', 
                    lname: 'User', 
                    password: 'hunter12')

nian = User.create!(email: 'nianhu96@gmail.com', 
                    fname: 'Nian', 
                    lname: 'Hu', 
                    password: 'hunter12')

rebecca = User.create!(email: 'rebeccaweng@gmail.com', 
                    fname: 'Rebecca', 
                    lname: 'Weng', 
                    password: 'hunter12')

grant = User.create!(email: 'granttyler@gmail.com', 
                    fname: 'Grant', 
                    lname: 'Tyler', 
                    password: 'hunter12')

claire = User.create!(email: 'clairedee@gmail.com', 
                    fname: 'Claire', 
                    lname: 'Dee', 
                    password: 'hunter12')

isabella = User.create!(email: 'ifalla@gmail.com', 
                    fname: 'Isabella', 
                    lname: 'Falla', 
                    password: 'hunter12')

ashlyn = User.create!(email: 'ashlyndrake@gmail.com', 
                    fname: 'Ashlyn', 
                    lname: 'Drake', 
                    password: 'hunter12')

################
### AMENITIES ###
################
        

wifi = Amenity.create!(name: 'Wifi')
ac = Amenity.create!(name: 'Air conditioning')
heat = Amenity.create!(name: 'Heat')
laundry = Amenity.create!(name: 'Laundry')
kitchen = Amenity.create!(name: 'Kitchen')


################
### LISTINGS ###
################


brooklyn = nian.listings.create!(host_id: nian.id,
                      title: "Airy loft in Williamsburg",
                      description: "For the urban explorer seeking escape into the hidden corners of the city, look no further than this light-filled loft located in the heart of Williamsburg. Just a few steps away from countless artisanal markets, vintage shopping, and farm-to-table restaurants, this place is ideal for the solo traveler who disdains the swarming crowds and bright lights of Times Square and craves a grittier, more authentic representation of the world’s most famous city. Get lost, strike up a conversation with the barista down the street, or make new friends at the nearby dive bar — this city is yours to explore.",
                      address: "84 Withers St",
                      city: "New York, USA",
                      lat: 40.716880,
                      long: -73.948810,
                      price: 60,
                      # amenity_ids: [wifi.id]
                      # amenity_ids: [wifi.id, ac.id, heat.id, laundry.id, kitchen.id]
                    )

iceland = isabella.listings.create!(host_id: isabella.id,
                          title: "Whimsical cottage in Iceland",
                          description: "For the intrepid traveler who craves solitude and space for contemplation, this remote cottage located seemingly in the middle of nowhere of Iceland may be your calling. Based on the grounds of a family-run horse farm, this whimsical little hidey-hole is perfect for someone who needs to escape civilization for one, two, maybe seven days. Dive deep into the bleakness of the black sand beaches, feel the wild winds whip around your face as you stand atop a mountain, and gaze awe-struck at the sheer power of unbridled nature. If vast, wind-blown expanses and fog-filled landscapes strike excitement rather than fear in your heart, then look no further — this house is for you.",
                          address: "26 870, Víkurbraut",
                          city: "Vík, Iceland",
                          lat: 63.417760,
                          long: -19.013610,
                          price: 50,
                          # amenity_ids: [heat.id, laundry.id, kitchen.id]
                        )

bali = ashlyn.listings.create!(host_id: ashlyn.id,
                      title: "Luxurious villa in Bali",
                      description: "For the overworked, perpetually sleep-deprived jetsetter who craves nothing more than a deep-tissue massage by the jungle and an early-morning dip in a private pool, this luxurious villa located in the heart of Bali is exactly what the doctor ordered. Surely you did not think that luxury villas were solely the domain of honeymooning couples or raucous groups of friends? Whoever said that you can’t take a five-hour-long flower bath by yourself was certainly misguided. At this luxury villa, you can receive the pampering that you so desperately need.",
                      address: "Jl. Raya Nyuh Kuning Pengosekan",
                      city: "Ubud, Indonesia",
                      lat: -8.533019,
                      long: 115.266617, 
                      price: 40,
                      # amenity_ids: [wifi.id, ac.id, laundry.id]
                    )

dolomites = isabella.listings.create!(host_id: isabella.id, 
                      title: "Lakeside cabin in the Dolomites",
                      description: "For the creative soul who needs to reawaken their senses after a long stretch of monotony and mundane concerns, consider embarking on a solo trip to northern Italy. After all, nothing invigorates the spirit more than waking up to a misty morning in the mountains and taking an early morning paddle around the still lake before retiring indoors to sip on some warm tea and get started on your creative endeavor. Whether it be painting or writing, photography or film, let the Dolomites be your muse. Who knows? Perhaps this cabin, located mere yards away from the famous Lago di Braies, will be the birthplace of the next great novel or cinematic masterpiece.",
                      address: "St. Veit 27",
                      city: "Braies, Italy",
                      lat: 46.698959,
                      long: 12.084640,
                      price: 45
                    )

copenhagen = nian.listings.create!(host_id: nian.id,
                      title: "Minimalist studio in Copenhagen",
                      description: "For the urbane traveler who lives for the simple things in life, this minimalist studio is a space that you can call your own. Decorated in classic Scandinavian fashion with clean lines and sparse furnishings, this apartment provides a light-filled and relaxing space for tired travelers to lay down their suitcases and do the things they love, whether it’s reading a book or getting some work done on their laptop before heading out to explore the thriving metropolis that is Copenhagen. Explore the city’s canals by bike, spend an afternoon sipping lattes at a cafe, or wander around an art museum and soak up some of Europe’s finest artistic masterpieces. Then, once the sun has set and your feet have grown tired, you can come back to your home away from home.",
                      address: "Adelgade 5-7, 1304",
                      city: "Copenhagen, Denmark",
                      lat: 55.682671,
                      long: 12.582340,
                      price: 50
                    )

tulum = ashlyn.listings.create!(host_id: ashlyn.id, 
                      title: "Beachside resort in Tulum",
                      description: "For the spontaneous traveler who revels in last-minute adventures and wild nights out with new friends from all across the world, this villa in Tulum offers the chance to make memories that you will never forget. Soak up the hot Mexican sun all day long, then party it up by the pool with your fellow villa-mates all night long. With a cold margarita in one hand and a beach ball in another, there’s no way you’re not going to enjoy yourself here. And once you get sick of lounging by a pool all day long, why not grab a bicycle and take a trip down to some of the local attractions? Dazzling blue cenotes and breathtaking archaeological sites are only a few pedals away. Don’t be disappointed that your friends from home can’t travel with you — you have dozens more waiting for you here.",
                      address: "Av. Tulum Mza 39, Centro",
                      city: "Tulum, Mexico",
                      lat: 21.153350,
                      long: -86.825270,
                      price: 40
                    )

bali1 = open("https://solobnb-seeds.s3.amazonaws.com/bali1.jpg")
bali2 = open("https://solobnb-seeds.s3.amazonaws.com/bali2.jpg")
bali3 = open("https://solobnb-seeds.s3.amazonaws.com/bali3.jpg")
bali4 = open("https://solobnb-seeds.s3.amazonaws.com/bali4.jpg")
bali5 = open("https://solobnb-seeds.s3.amazonaws.com/bali5.jpg")

bali.photos.attach(io: bali1, filename: 'bali1.jpg')
bali.photos.attach(io: bali2, filename: 'bali2.jpg')
bali.photos.attach(io: bali3, filename: 'bali3.jpg')
bali.photos.attach(io: bali4, filename: 'bali4.jpg')
bali.photos.attach(io: bali5, filename: 'bali5.jpg')

iceland1 = open("https://solobnb-seeds.s3.amazonaws.com/iceland1.jpg")
iceland2 = open("https://solobnb-seeds.s3.amazonaws.com/iceland2.jpg")
iceland3 = open("https://solobnb-seeds.s3.amazonaws.com/iceland3.jpg")
iceland4 = open("https://solobnb-seeds.s3.amazonaws.com/iceland4.jpg")
iceland5 = open("https://solobnb-seeds.s3.amazonaws.com/iceland5.jpg")

iceland.photos.attach(io: iceland1, filename: 'iceland1.jpg')
iceland.photos.attach(io: iceland2, filename: 'iceland2.jpg')
iceland.photos.attach(io: iceland3, filename: 'iceland3.jpg')
iceland.photos.attach(io: iceland4, filename: 'iceland4.jpg')
iceland.photos.attach(io: iceland5, filename: 'iceland5.jpg')

brooklyn1 = open("https://solobnb-seeds.s3.amazonaws.com/brooklyn1.jpg")
brooklyn2 = open("https://solobnb-seeds.s3.amazonaws.com/brooklyn2.jpg")
brooklyn3 = open("https://solobnb-seeds.s3.amazonaws.com/brooklyn3.jpg")
brooklyn4 = open("https://solobnb-seeds.s3.amazonaws.com/brooklyn4.jpg")
brooklyn5 = open("https://solobnb-seeds.s3.amazonaws.com/brooklyn5.jpg")

brooklyn.photos.attach(io: brooklyn1, filename: 'brooklyn1.jpg')
brooklyn.photos.attach(io: brooklyn2, filename: 'brooklyn2.jpg')
brooklyn.photos.attach(io: brooklyn3, filename: 'brooklyn3.jpg')
brooklyn.photos.attach(io: brooklyn4, filename: 'brooklyn4.jpg')
brooklyn.photos.attach(io: brooklyn5, filename: 'brooklyn5.jpg')

dolomites1 = open("https://solobnb-seeds.s3.amazonaws.com/dolomites1.jpg")
dolomites2 = open("https://solobnb-seeds.s3.amazonaws.com/dolomites2.jpg")
dolomites3 = open("https://solobnb-seeds.s3.amazonaws.com/dolomites3.jpg")
dolomites4 = open("https://solobnb-seeds.s3.amazonaws.com/dolomites4.jpg")
dolomites5 = open("https://solobnb-seeds.s3.amazonaws.com/dolomites5.jpg")

dolomites.photos.attach(io: dolomites1, filename: 'dolomites1.jpg')
dolomites.photos.attach(io: dolomites2, filename: 'dolomites2.jpg')
dolomites.photos.attach(io: dolomites3, filename: 'dolomites3.jpg')
dolomites.photos.attach(io: dolomites4, filename: 'dolomites4.jpg')
dolomites.photos.attach(io: dolomites5, filename: 'dolomites5.jpg')

copenhagen1 = open("https://solobnb-seeds.s3.amazonaws.com/copenhagen1.jpg")
copenhagen2 = open("https://solobnb-seeds.s3.amazonaws.com/copenhagen2.jpg")
copenhagen3 = open("https://solobnb-seeds.s3.amazonaws.com/copenhagen3.jpg")
copenhagen4 = open("https://solobnb-seeds.s3.amazonaws.com/copenhagen4.jpg")
copenhagen5 = open("https://solobnb-seeds.s3.amazonaws.com/copenhagen5.jpg")

copenhagen.photos.attach(io: copenhagen1, filename: 'copenhagen1.jpg')
copenhagen.photos.attach(io: copenhagen2, filename: 'copenhagen2.jpg')
copenhagen.photos.attach(io: copenhagen3, filename: 'copenhagen3.jpg')
copenhagen.photos.attach(io: copenhagen4, filename: 'copenhagen4.jpg')
copenhagen.photos.attach(io: copenhagen5, filename: 'copenhagen5.jpg')

tulum1 = open("https://solobnb-seeds.s3.amazonaws.com/tulum1.jpg")
tulum2 = open("https://solobnb-seeds.s3.amazonaws.com/tulum2.jpg")
tulum3 = open("https://solobnb-seeds.s3.amazonaws.com/tulum3.jpg")
tulum4 = open("https://solobnb-seeds.s3.amazonaws.com/tulum4.jpg")
tulum5 = open("https://solobnb-seeds.s3.amazonaws.com/tulum5.jpg")

tulum.photos.attach(io: tulum1, filename: 'tulum1.jpg')
tulum.photos.attach(io: tulum2, filename: 'tulum2.jpg')
tulum.photos.attach(io: tulum3, filename: 'tulum3.jpg')
tulum.photos.attach(io: tulum4, filename: 'tulum4.jpg')
tulum.photos.attach(io: tulum5, filename: 'tulum5.jpg')

user1 = open("https://solobnb-seeds.s3.amazonaws.com/user1.jpg")
user2 = open("https://solobnb-seeds.s3.amazonaws.com/user2.jpg")
user3 = open("https://solobnb-seeds.s3.amazonaws.com/user3.jpg")
user4 = open("https://solobnb-seeds.s3.amazonaws.com/user4.jpg")
user5 = open("https://solobnb-seeds.s3.amazonaws.com/user5.jpg")
user6 = open("https://solobnb-seeds.s3.amazonaws.com/user6.jpg")
user7 = open("https://solobnb-seeds.s3.amazonaws.com/user7.jpg")

demo.photo.attach(io: user1, filename: 'user1.jpg')
nian.photo.attach(io: user2, filename: 'user2.jpg')
rebecca.photo.attach(io: user3, filename: 'user3.jpg')
grant.photo.attach(io: user4, filename: 'user4.jpg')
claire.photo.attach(io: user5, filename: 'user5.jpg')
isabella.photo.attach(io: user6, filename: 'user6.jpg')
ashlyn.photo.attach(io: user7, filename: 'user7.jpg')


# iceland = Listing.create!(host_id: 2,
#                           title: "Whimsical cottage in Iceland",
#                           description: "For the intrepid traveler who craves solitude and space for contemplation, this remote cottage located seemingly in the middle of nowhere of Iceland may be your calling. Based on the grounds of a family-run horse farm, this whimsical little hidey-hole is perfect for someone who needs to escape civilization for one, two, maybe seven days. Dive deep into the bleakness of the black sand beaches, feel the wild winds whip around your face as you stand atop a mountain, and gaze awe-struck at the sheer power of unbridled nature. If vast, wind-blown expanses and fog-filled landscapes strike excitement rather than fear in your heart, then look no further — this house is for you.",
#                           address: "Hofdabrekku 871",
#                           city: "Vík, Iceland",
#                           lat: 64.426811,
#                           long: -14.623470,
#                           price: 50)

# brooklyn = Listing.create!(host_id: 2,
#                           title: "Airy loft in Williamsburg",
#                           description: "For the urban explorer seeking escape into the hidden corners of the city, look no further than this light-filled loft located in the heart of Williamsburg. Just a few steps away from countless artisanal markets, vintage shopping, and farm-to-table restaurants, this place is ideal for the solo traveler who disdains the swarming crowds and bright lights of Times Square and craves a grittier, more authentic representation of the world’s most famous city. Get lost, strike up a conversation with the barista down the street, or make new friends at the nearby dive bar — this city is yours to explore.",
#                           address: "84 Withers St",
#                           city: "New York, USA",
#                           lat: 40.716880,
#                           long: -73.948810,
#                           price: 60)

# bali = Listing.create!(host_id: 2,
#                       title: "Luxurious villa in Bali",
#                       description: "For the overworked, perpetually sleep-deprived jetsetter who craves nothing more than a deep-tissue massage by the jungle and an early-morning dip in a private pool, this luxurious villa located in the heart of Bali is exactly what the doctor ordered. Surely you did not think that luxury villas were solely the domain of honeymooning couples or raucous groups of friends? Whoever said that you can’t take a five-hour-long flower bath by yourself was certainly misguided. At this luxury villa, you can receive the pampering that you need to make your body less sore as well as the glamorous Instagram photos that you need to make your friends back home more jealous.",
#                       address: "Jl. Raya Nyuh Kuning Pengosekan",
#                       city: "Ubud, Indonesia",
#                       lat: -8.533019,
#                       long: 115.266617, 
#                       price: 40)


################
### LISTING ####
### AMENITIES ##
################

ListingAmenity.create!(
  amenity_id: wifi.id, 
  listing_id: brooklyn.id
)

ListingAmenity.create!(
  amenity_id: ac.id, 
  listing_id: brooklyn.id
)

ListingAmenity.create!(
  amenity_id: heat.id, 
  listing_id: brooklyn.id
)

ListingAmenity.create!(
  amenity_id: laundry.id, 
  listing_id: brooklyn.id
)

ListingAmenity.create!(
  amenity_id: kitchen.id, 
  listing_id: brooklyn.id
)

ListingAmenity.create!(
  amenity_id: heat.id, 
  listing_id: iceland.id
)

ListingAmenity.create!(
  amenity_id: laundry.id, 
  listing_id: iceland.id
)

ListingAmenity.create!(
  amenity_id: kitchen.id, 
  listing_id: iceland.id
)

ListingAmenity.create!(
  amenity_id: wifi.id, 
  listing_id: bali.id
)

ListingAmenity.create!(
  amenity_id: ac.id, 
  listing_id: bali.id
)

ListingAmenity.create!(
  amenity_id: laundry.id, 
  listing_id: bali.id
)

ListingAmenity.create!(
  amenity_id: wifi.id, 
  listing_id: copenhagen.id
)

ListingAmenity.create!(
  amenity_id: ac.id, 
  listing_id: copenhagen.id
)

ListingAmenity.create!(
  amenity_id: heat.id, 
  listing_id: copenhagen.id
)

ListingAmenity.create!(
  amenity_id: laundry.id, 
  listing_id: copenhagen.id
)

ListingAmenity.create!(
  amenity_id: kitchen.id, 
  listing_id: copenhagen.id
)

ListingAmenity.create!(
  amenity_id: heat.id, 
  listing_id: dolomites.id
)

ListingAmenity.create!(
  amenity_id: laundry.id, 
  listing_id: dolomites.id
)

ListingAmenity.create!(
  amenity_id: kitchen.id, 
  listing_id: dolomites.id
)

ListingAmenity.create!(
  amenity_id: wifi.id, 
  listing_id: tulum.id
)

ListingAmenity.create!(
  amenity_id: ac.id, 
  listing_id: tulum.id
)

ListingAmenity.create!(
  amenity_id: laundry.id, 
  listing_id: tulum.id
)


################
#### REVIEWS ###
################

Review.create!(
  listing_id: bali.id,
  author_id: nian.id,
  body: "Hands down the coolest experience of my life! After all my friends flaked on me, I decided to go ahead and book a trip to Bali anyway. Best decision ever! You absolutely have to come here and try out the massages and the flower bath. And the view of the rice paddies from the villa is absolutely insane. My friends back home are SO jealous. I got tons of amazing photos and gained like 2,000 followers on Instagram. Shoot me a follow: @nianhu",
  accuracy: 5,
  communication: 4,
  cleanliness: 5,
  location: 5,
  check_in: 5,
  value: 5
)

channel1 = Channel.create!(
  name: 'myfirstchannel'
)

channel1.members << demo
channel1.members << nian 