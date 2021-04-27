# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
event1 = Event.create(:title => "started semester")
memory1 = Memory.create(:content => "got some books", :event => event1)

Event.create([
  { title: "started semester"},
  { title: "went on vacation to mexico"},
  { title: "moved to the city"},
  ])


Memory.create([
  { content: "there was a good restaurant nearby"},
  { content: "we saw a rabbit"},
  ])
