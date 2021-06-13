class RacesController < ApplicationController

    def create
        byebug
        # params
        # TODO: Confirm current user as user
        user = User.find(params[:current_user_id])

        if user
            byebug
            race = Race.find_or_create_by(name: params[:race][:name]) do |r|
                r.race_distance_id = params[:race][:race_distance_id]
            end
            byebug
        end

        # TODO: race = Race.find_or_create_by(name: params[:race][:name]) + race_distance_id
        # TODO: user.user_races.create(race.id,race_params([:user_race]))
        # race_id
        # {"current_user_id"=>1, "race"=>{"name"=>"Charleston Marathon", "race_distance_id"=>"6"}, "user_race"=>{"race_date"=>"2020-01-11", "elapsed_time"=>"", "gun_time"=>"", "results_url"=>"", "bib_nbr"=>"", "division_name"=>"", "overall_place"=>"", "overall_finishers"=>"", "gender_place"=>"", "gender_finishers"=>"", "division_place"=>"", "division_finishers"=>"", "race_notes"=>""}
    end

    private

    def race_params(*args)
        params.require(:user_race).permit(*args)
    end
end
