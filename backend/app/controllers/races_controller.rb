class RacesController < ApplicationController

    def index
        if params[:user_id] && user = User.find(params[:user_id])
            races = user.races.sort_reverse_chron
            render json: RacesSerializer.new(races).to_serialized_json
        elsif !params[:user_id]
            races = Race.all
            render json: RacesSerializer.new(races).to_serialized_json
        else
            render json: { msg: "User id is not valid"}
        end
    end

    def create
        user = User.find(params[:current_user_id])

        if user
            race = Race.find_or_create_by(name: params[:race][:name]) do |r|
                r.race_distance_id = params[:race][:race_distance_id]
            end
            params[:user_race][:race_id] = race.id
            if user.user_races.create(race_params(params[:user_race]))
                render json: { msg: 'Success', redirect: '/races' }
            end

        end

    end

    private

    def race_params(*args)
        params.require(:user_race).permit(:race_date, :elapsed_time, :gun_time, :results_url, :bib_nbr, :division_name, :overall_place, :overall_finishers, :gender_place, :gender_finishers, :division_place, :division_finishers, :race_notes, :race_id)
    end
end
