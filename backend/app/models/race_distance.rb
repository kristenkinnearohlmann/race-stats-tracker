class RaceDistance < ApplicationRecord
    has_many :races
    has_many :user_races, through: :races
    has_many :users, through: :user_races
    
end
