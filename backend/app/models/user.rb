class User < ApplicationRecord
    has_secure_password

    has_many :user_races, dependent: :destroy
    has_many :races, through: :user_races
    has_many :race_distances, through: :races

end
