class RaceDistancesController < ApplicationController

    def index
        race_distances = RaceDistance.all
        render json: RaceDistancesSerializer.new(race_distances).to_serialized_json
    end

end
