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
race2 = Race.create(name: "Securian Winter Run", url: "https://www.wintercarnival.com/events/securian-winter-run/",race_distance_id: 3)
race3 = Race.create(name: "TC 1 Mile", url: "", race_distance_id: 1)
race4 = Race.create(name: "Birdtown Half Marathon", url: "http://www.thebirdtown.com/", race_distance_id: 5)
race5 = Race.create(name: "Urban Wildland Half Marathon", url: "https://www.richfieldmn.gov/around_town/wood_lake_nature_center/urban_wildland_half_marathon_and_5k/index.php", race_distance_id: 5)
race6 = Race.create(name: "Lincoln Marathon", url: "https://www.lincolnmarathon.org/", race_distance_id: 6)

# # Add user race instances
user1.user_races.create(race_date: "2020-01-11", elapsed_time: "05:10:16", gun_time: "05:11:10", results_url: "https://racesonline.com/events/charleston-marathon/results/2020/bib/5507", bib_nbr: "5507", division_name: "40-44", overall_place: 647, overall_finishers: 861, gender_place: 218, gender_finishers: 336, division_place: 28, division_finishers: 45, race_notes: "Wow, humidity! I ran too hard the first 8 miles and had to ratchet back hard. It was the first marathon where I was worried I wouldn't finish in time but I had plenty of time once I decided on a great strategy to manage. I hope none of the remaining southern marathons are so high humidity.", race_id: race1.id)
user1.user_races.create(race_date: "2020-01-25", elapsed_time: "00:57:33", gun_time: "00:57:45", results_url: "https://results.chronotrack.com/event/results/event/event-53096?lc=en", bib_nbr: "6569", division_name: "F40-49", overall_place: 130, overall_finishers: 294, gender_place: 46, gender_finishers: 169, division_place: 13, division_finishers: 52, race_notes: "I ran a lot faster than expected! Bruce F found me before the start and said he was running low 9s; I was planning 11s. At the 10K turn, I was not that far behind him! He found me at the finish and I said I was about 2 minutes behind him. I walked up the 2 big hills, pumping my arms of course!, and still got a fast time.", race_id: race2.id)
user1.user_races.create(race_date: "2019-05-09", elapsed_time: "00:07:54", gun_time: "00:07:58", results_url: "https://www.mtecresults.com/runner/show?race=7994&rid=462", bib_nbr: "462", division_name: "F4044", overall_place: 68, overall_finishers: 79, gender_place: 68, gender_finishers: 79, division_place: 5, division_finishers: 7, race_notes: "Not bad for less than 1 week after a marathon!", race_id: 3)