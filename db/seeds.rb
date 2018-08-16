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

#EVENTS

paragraph = "
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit velit sit amet augue tempor, nec euismod sem consectetur. Proin et semper risus. Donec aliquet tincidunt hendrerit. Maecenas sit amet dictum magna. Morbi pretium nulla ut volutpat pellentesque. Suspendisse cursus tellus id nunc efficitur, non tempus felis consectetur. Phasellus scelerisque posuere purus sit amet sollicitudin. Sed eu malesuada metus. Nulla id placerat nisl, vel feugiat ex. In leo felis, consectetur a sapien et, facilisis sollicitudin ipsum. Aenean porta lectus vitae condimentum placerat. Donec mollis mi felis, id mollis nulla aliquam id. Morbi et turpis in eros fringilla dignissim. Donec rutrum ante quam, id congue leo scelerisque sit amet. Ut maximus mi dui, et tincidunt velit cursus a. Aliquam nec turpis neque.

Mauris faucibus purus leo, id lacinia sem auctor ut. Aenean dignissim varius gravida. Maecenas maximus ligula at lorem tristique, accumsan eleifend dolor consequat. Quisque posuere ante metus, et fermentum ligula congue a. Sed in faucibus urna. Vestibulum sem felis, rutrum at dictum ac, fringilla et augue. Aenean vestibulum aliquam enim et fringilla. Cras sit amet pulvinar felis. Vestibulum nulla metus, aliquet at nunc ut, scelerisque viverra neque. Maecenas ac elit eu leo lobortis ultricies eu eget eros. Fusce bibendum ut erat non molestie.

Donec laoreet lectus et diam laoreet laoreet. Donec ornare dolor a turpis fringilla, eu gravida ligula vehicula. Nunc sit amet lorem fermentum, luctus metus et, vestibulum nulla. Praesent at lacus ac ipsum tincidunt congue. Etiam rutrum odio ipsum, a aliquet libero semper vel. Mauris suscipit nisi risus, sed euismod sapien rhoncus luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sed arcu ut leo mollis ullamcorper id commodo velit. Aenean tempus scelerisque erat, vehicula feugiat est maximus quis. Nam aliquet suscipit ipsum at laoreet. Nullam fermentum aliquet risus, eget bibendum ex rhoncus sed. Aliquam suscipit, lacus ut vulputate lobortis, enim lorem vestibulum dolor, quis bibendum mi ipsum at nulla. Ut malesuada vel massa non imperdiet. In consectetur est eu semper efficitur."

Event.create!(
  title: "It's Sahar's Birthday",
  description: "Celebrating 23 years of Sahar",
  venue_name: "Memorial Glade",
  address: "University Drive",
  city: "Berkeley",
  state: "CA",
  zip: "94708",
  country: "United States of America",
  lat: 1.0,
  lng: 1.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Nick",
  organizer_description: "it's lil ol me",
  user_id: nick[:id]
)

Event.create!(
  title: "Dance Party",
  description: paragraph,
  venue_name: "Church of 8 Wheels",
  address: "554 Fillmore St",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  country: "United States of America",
  lat: 2.0,
  lng: 2.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 19"),
  organizer_name: "Fun Company",
  organizer_description: "We only serve fun!",
  user_id: jane[:id]
)

Event.create!(
  title: "Pizza Networking Social",
  description: paragraph,
  venue_name: "Golden Boy Pizza",
  address: "542 Green St",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  country: "United States of America",
  lat: 3.0,
  lng: 3.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("September 4"),
  organizer_name: "The Pizza Conglomerate",
  organizer_description: "Controlling the pizza business by hotile take overs since 1983!",
  user_id: demo[:id]
)

Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
Event.create!(
  title: "Painting Class",
  description: paragraph,
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  lat: 4.0,
  lng: 4.0,
  start_time: Time.parse("7:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)
