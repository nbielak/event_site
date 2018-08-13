# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.delete_all
User.delete_all
#USERS



demo = User.create!(
  email: "demo@demo.com",
  password: "123456",
  first_name: "Demo",
  last_name: "Demosthenes"
)

nick = User.create!(
  email: "nick@nick.com",
  password: "123123",
  first_name: "Nick",
  last_name: "Nick"
)

john = User.create!(
  email: "john@john.com",
  password: "123123",
  first_name: "John",
  last_name: "Doe"
)

jane = User.create!(
  email: "jane@jane.com",
  password: "123123",
  first_name: "Jane",
  last_name: "Doe"
)

sahar = User.create!(
  email: "sahar@sahar.com",
  password: "123123",
  first_name: "Sahar",
  last_name: "Sahar"
)
#
# #EVENTS
#
#
# Event.create!(
#   title: "Celebrating 23 Years of Sahar",
#   description: "It's Sahar's birthday",
#   location: "Berkeley, CA",
#   start_time: Time.now,
#   start_date: Date.parse("August 21"),
#   user_id: nick[:id]
# )
#
# Event.create!(
#   title: "Dance Party",
#   description: "Fun dancing",
#   location: "San Francisco, CA",
#   start_time: Time.now,
#   start_date: Date.parse("August 19"),
#   user_id: jane[:id]
# )
#
# Event.create!(
#   title: "Pizza Networking Social",
#   description: "The best way into the pizza industry",
#   location: "San Francisco, CA",
#   start_time: Time.now,
#   start_date: Date.parse("September 4"),
#   user_id: demo[:id]
# )
#
# Event.create!(
#   title: "Painting Class",
#   description: "Learn to paint",
#   location: "San Francisco, CA",
#   start_time: Time.now,
#   start_date: Date.parse("August 21"),
#   user_id: john[:id]
# )
