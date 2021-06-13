class RaceDistancesController < ApplicationController

    def index
        race_distances = RaceDistance.all
        render json: RaceDistancesSerializer.new(race_distances).to_serialized_json
    end

    def show
        byebug
        
        # params[:user_id]
        # user = User.find(params[:user_id])
        # params[:id]
        # ?
        # # user.races.distance(params[:id])
        # or
        # user.races.find_by(race_distance_id: params[:id])
    end

end
