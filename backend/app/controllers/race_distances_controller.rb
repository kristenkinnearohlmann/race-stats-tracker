class RaceDistancesController < ApplicationController

    def index
        race_distances = RaceDistance.all
        render json: RaceDistancesSerializer.new(race_distances).to_serialized_json
    end

    def show
        if params[:user_id] && user = User.find(params[:user_id])
            race_distance = user.races.distance(params[:id]).sort_reverse_chron
            
            if race_distance.any?
                render json: RaceDistancesSerializer.new(race_distance).to_serialized_json
            else
                render json: { msg: 'No results returned for this user and distance.' }
            end
        else
            render json: { msg: "User id is not valid"}
        end
    end

end
