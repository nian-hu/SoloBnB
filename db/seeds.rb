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

################
### LISTINGS ###
################

################
#### REVIEWS ###
################