class UserRace < ApplicationRecord
  belongs_to :user
  belongs_to :race

  before_save :calculate_race_age

  def calculate_race_age
    dob = self.user.date_of_birth
    event_dt = self.race_date

    race_age_months = (event_dt.year * 12 + event_dt.month) - (dob.year * 12 + dob.month)
    self.age = race_age_months / 12
  end

end
