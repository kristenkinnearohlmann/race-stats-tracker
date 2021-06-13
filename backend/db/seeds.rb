# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# # Add user
user1 = User.create(email: "focusrunning.kko@gmail.com", password: "abc123", date_of_birth: "1976-01-06", gender: "f", bio: "A runner from Bloomington, MN")
user2 = User.create(email: "kkinnea@gmail.com", password: "xyz789", date_of_birth: "1986-01-06", gender: "f", bio: "A runner from Bloomington, IL")

# # Populate race_distances
one_mile = RaceDistance.create(distance_type: "1 Mile", miles: 1.0, kilometers: 1.61)
five_k = RaceDistance.create(distance_type: "5K", miles: 3.1, kilometers: 5.0)
ten_k = RaceDistance.create(distance_type: "10K", miles: 6.2, kilometers: 10.0)
ten_mile = RaceDistance.create(distance_type: "10 Mile", miles: 10.0, kilometers: 16.10)
half_marathon = RaceDistance.create(distance_type: "Half Marathon", miles: 13.1, kilometers: 21.1)
marathon = RaceDistance.create(distance_type: "Marathon", miles: 26.2, kilometers: 42.2)

# # Add races to be used for user races
race1 = Race.create(name: "Charleston Marathon", url: "https://capstoneraces.com/charleston-marathon/", race_distance_id: 6)

# # Add user race instances
user1.user_races.create(race_date: "1/11/2020", elapsed_time: "05:10:16", gun_time: "05:11:10", results_url: "https://racesonline.com/events/charleston-marathon/results/2020/bib/5507", bib_nbr: "5507", division_name: "40-44", overall_place: 647, overall_finishers: 861, gender_place: 218, gender_finishers: 336, division_place: 28, division_finishers: 45, race_notes: "Wow, humidity! I ran too hard the first 8 miles and had to ratchet back hard. It was the first marathon where I was worried I wouldn't finish in time but I had plenty of time once I decided on a great strategy to manage. I hope none of the remaining southern marathons are so high humidity.", race_id: race1.id)