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


Event.create!(
  title: "It's Sahar's Birthday",
  description: "Come to Memorial Glade this Tuesday for an event you aren't likely to forget!  Once a year, we get a chance to celebrate Sahar and all that she has accomplished, and the time has finally come.
  There will be Cheeseboard pizza provided, but come early because we will run out",
  venue_name: "Memorial Glade",
  address: "University Drive",
  city: "Berkeley",
  state: "CA",
  zip: "94708",
  country: "United States of America",
  start_time: Time.parse("23:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Nick",
  organizer_description: "Nick loves throwing events for Sahar!",
  user_id: nick[:id]
)

Event.create!(
  title: "San Francisco Pirate Party",
  description: "Yo Ho Ho! While the 1700s were by far one of the best centuries of our existence. The sea-faring fashion was uhh-mayy-zing. The lingo was super dope, savvy? And the shanty's were better than watching a landlubber get hornswaggled. So don't be an old Sea Dog, flying the yellow jack! Stike ye colors, splice the mainbrace, and grab a pint o' grog! Even the old salts will be three sheets to the wind, ye scallywag!

  Network with the Scourges of the Seven Seas themselves, and win a chance to visit Davey Jones' Locker! So bring that spring upon 'er, and batten down the hatches for one great party, bucko!",
  venue_name: "The Docks",
  address: "1 Dock Place",
  city: "San Francisco",
  state: "CA",
  zip: "94321",
  country: "United States of America",
  start_time: Time.parse("14:00"),
  start_date: Date.parse("September 30"),
  organizer_name: "Jolly Roger Industries",
  organizer_description: "Helping worthless maggots go on account since 1646!",
  user_id: nick[:id]
)

Event.create!(
  title: "Kitten Parade",
  description: "All of the Kittens in San Francisco will be parading through the city this Sunday.  The parade will start on the golden gate bridge, and from there, they will disperse in any direction they choose!  This year, we will be providing laser pointers to all attendees in an effort to keep the parade more cohesive!",
  venue_name: "The Golden Gate Bridge",
  address: "321 Golden Gate Bridge Boulevard",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  country: "United States of America",
  start_time: Time.parse("02:00"),
  start_date: Date.parse("August 19"),
  organizer_name: "The SPCA",
  organizer_description: "CATS CATS CATS",
  user_id: jane[:id]
)

Event.create!(
  title: "Dance Party",
  description: "Dance the night away!",
  venue_name: "Church of 8 Wheels",
  address: "554 Fillmore St",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  country: "United States of America",
  start_time: Time.parse("13:00"),
  start_date: Date.parse("August 19"),
  organizer_name: "Fun Company",
  organizer_description: "We only serve fun!",
  user_id: jane[:id]
)

Event.create!(
  title: "Pizza Networking Social",
  description: "Pizza is the future! Come find your way into this budding marker and talk with industry greats!",
  venue_name: "Golden Boy Pizza",
  address: "542 Green St",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  country: "United States of America",
  start_time: Time.parse("06:00"),
  start_date: Date.parse("September 4"),
  organizer_name: "The Pizza Conglomerate",
  organizer_description: "Controlling the pizza business by hostile take overs since 1983!",
  user_id: demo[:id]
)

Event.create!(
  title: "Painting Class",
  description: "This is a finger-painting only event.",
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  start_time: Time.parse("09:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)


Event.create!(
  title: "Hamburger City",
  description: "In every person's lifetime, they are given a chance to witness something incredible.  For many, their chance has come.  From October 12 through the end of May, The Palace of Fine Arts will be showing the world reknowned 'Hamburger City'.  Many have described it as 'awe-inspiring' and 'life-changing,' leaving the exhibit with their notion of reality shifted.

   Critics around the world are saying the same thing, 'Mere words could never capture the earth-shaking gravity of this work'.  Philosophers from all over are retiring, claiming that after seeing 'Hamburger City', there are no more questions that need answers.  Tickets are limited so buy soon.  Black tie only.",
  venue_name: "The Palace of Fine Arts",
  address: "3301 Lyon St",
  city: "San Francisco",
  state: "CA",
  zip: "94123",
  country: "United States of America",
  start_time: Time.parse("02:00"),
  start_date: Date.parse("October 12"),
  organizer_name: "Magna Opera and More!",
  organizer_description: "We know art.",
  user_id: john[:id]
)

Event.create!(
  title: "Burrito and Beer Festival",
  description: "All you can eat burritos and beer! Enjoy the final days of summer the best way possible, relaxing and eating in the sun (or fog)!",
  venue_name: "Mission Dolores Park",
  address: "Dolores St & 19th St",
  city: "San Francisco",
  state: "CA",
  zip: "94114",
  country: "United States of America",
  start_time: Time.parse("05:00"),
  start_date: Date.parse("September 15"),
  organizer_name: "The San Francisco Advisory Council on Beer and Burritos",
  organizer_description: "Protecting the City by the Bay from subpar beer and burritos since 1946.",
  user_id: john[:id]
)

Event.create!(
  title: "SoMa Yogathon",
  description: "Greet the dawn at AT&T park for our monthly Yogathon with Rep. Nancy Pelosi!",
  venue_name: "AT&T Park",
  address: "24 Willie Mays Plaza",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
  country: "United States of America",
  start_time: Time.parse("22:00"),
  start_date: Date.parse("December 13"),
  organizer_name: "The Office of Nancy Pelosi",
  organizer_description: "Yay yoga!",
  user_id: demo[:id]
)

Event.create!(
  title: "Vote",
  description: "Literally, please just vote.",
  venue_name: "Your Polling Place",
  address: "1 Your Polling Place Rd",
  city: "San Francisco",
  state: "CA",
  zip: "94123",
  country: "United States of America",
  start_time: Time.parse("00:00"),
  start_date: Date.parse("November 9"),
  organizer_name: "Please Vote",
  organizer_description: "It's your civc duty!",
  user_id: demo[:id]
)

Event.create!(
  title: "Midnight Marathon",
  description: "Everyone's favorite marathon is back! Despite permit set backs due to last year's glowstick incident, we're back and better than ever!  BYOhead-lamp and reflective gear.",
  venue_name: "The Bay Bridge",
  address: "1 Bay Bridge Park",
  city: "San Francisco",
  state: "CA",
  zip: "94123",
  country: "United States of America",
  start_time: Time.parse("04:00"),
  start_date: Date.parse("September 3"),
  organizer_name: "The Marathon Brothers",
  organizer_description: "Party like it's 490 BCE!",
  user_id: demo[:id]
)
Event.create!(
  title: "How Many Times Can You Watch 'The Room'?",
  description: "Last person standing wins a TGIFriday's gift card.",
  venue_name: "The Metreon",
  address: "135 4th St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  start_time: Time.parse("04:00"),
  start_date: Date.parse("September 3"),
  organizer_name: "Movies R Us",
  organizer_description: "We're big picture people!",
  user_id: demo[:id]
)

Event.create!(
  title: "Lucyfest",
  description: "Lucy is the best dog ever and deserves to be celebrated",
  venue_name: "The Fillmore",
  address: "1805 Geary Blvd",
  city: "San Francisco",
  state: "CA",
  zip: "94115",
  country: "United States of America",
  start_time: Time.parse("04:00"),
  start_date: Date.parse("September 3"),
  organizer_name: "Sahar",
  organizer_description: "I love Lucy.",
  user_id: sahar[:id]
)
