# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# # Add user
user = User.create(email: "focusrunning.kko@gmail.com", password: "abc123", date_of_birth: "1976-01-06", bio: "A runner from Bloomington, MN")

# # Populate race_distances
RaceDistance.create(distance_type: "1 Mile", miles: 1.0, kilometers: 1.61)
RaceDistance.create(distance_type: "5K", miles: 3.1, kilometers: 5.0)
RaceDistance.create(distance_type: "10K", miles: 6.2, kilometers: 10.0)
RaceDistance.create(distance_type: "10 Miles", miles: 10.0, kilometers: 16.10)
RaceDistance.create(distance_type: "Half Marathon", miles: 13.1, kilometers: 21.1)
RaceDistance.create(distance_type: "Marathon", miles: 26.2, kilometers: 42.2)