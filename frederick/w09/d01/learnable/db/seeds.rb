# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

School.create({
  name: 'General Assembly',
  description: "Learn technology, design, and business skills from industry professionals in our global community."
  })

School.create({
  name: 'UTS',
  description: "Located in Sydney’s creative industries precinct and close to inner city cultural hubs, our City campus is within easy walking distance of Central Station and the CBD."
  })

School.create({
  name: 'MIT',
  description: "The mission of MIT is to advance knowledge and educate students in science, technology and other areas of scholarship that will best serve the nation and the world in the 21st century."
  })