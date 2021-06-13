class UserRace < ApplicationRecord
  belongs_to :user
  belongs_to :race

  scope :sort_reverse_chron, -> { order(race_date: :asc) } # FUTURE: counter-intuitive? I needed to sort the dates asc to have them be in reverse chron

  before_save :calculate_race_age
  before_save :calculate_pace_miles
  before_save :calculate_pace_kilometers
  before_save :calculate_overall_rank
  before_save :calculate_gender_rank
  before_save :calculate_division_rank

  def calculate_race_age
    dob = self.user.date_of_birth
    event_dt = self.race_date

    race_age_months = (event_dt.year * 12 + event_dt.month) - (dob.year * 12 + dob.month)
    self.age = race_age_months / 12
  end

  def calculate_pace_miles
    self.pace_miles = calculate_pace(self.race.miles)
  end

  def calculate_pace_kilometers
    self.pace_kilometers = calculate_pace(self.race.kilometers)
  end

  def calculate_overall_rank
    self.overall_rank = calculate_rank_percent(self.overall_place, self.overall_finishers)
  end

  def calculate_gender_rank
    self.gender_rank = calculate_rank_percent(self.gender_place, self.gender_finishers)
  end

  def calculate_division_rank
    self.division_rank = calculate_rank_percent(self.division_place, self.division_finishers)
  end

  private

  def calculate_rank_percent(place, finishers)
    ((finishers.to_f - place.to_f) / finishers.to_f)
  end

  def calculate_pace(race_distance_unit)
    time_segments = self.elapsed_time.split(":")

    case time_segments.length
    when 3 # hours, minutes, seconds
      time_in_seconds = (time_segments[0].to_i * 60 * 60) + (time_segments[1].to_i * 60) + time_segments[2].to_i
    when 2 # minutes, seconds
    else 
      # MVP2: too many or too few values to calculate, handle
    end

    pace_in_seconds = time_in_seconds / race_distance_unit
    race_pace_raw = pace_in_seconds / 60

    race_pace_minutes = race_pace_raw.floor
    race_pace_seconds = (pace_in_seconds - (race_pace_minutes * 60)).floor

    return "#{race_pace_minutes.to_s}:#{race_pace_seconds.to_s}"

  end

end
