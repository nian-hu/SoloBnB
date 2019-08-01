# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

################
#### USERS #####
################

User.destroy_all

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

# demo.listings.create!(host_id: 1,
#                       title: "My sweet pad",
#                       description: "The most beautiful house",
#                       address: "12 Sunshine St.",
#                       city: "Venice, Italy",
#                       lat: 50.698959,
#                       long: 50.084640,
#                       price: 50)


################
### LISTINGS ###
################

# Listing.destroy_all

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
#### REVIEWS ###
################