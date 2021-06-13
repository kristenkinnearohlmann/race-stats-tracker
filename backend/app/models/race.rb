class Race < ApplicationRecord
  belongs_to :race_distance

  has_many :user_races
  has_many :users, through: :user_races

  scope :distance,-> (distance_id){ where("race_distance_id = ?", distance_id)}
  scope :sort_reverse_chron, -> { order(created_at: :desc) }

end
