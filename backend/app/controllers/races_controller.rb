class RacesController < ApplicationController

    def create
        byebug
        # params
        # TODO: Confirm current user as user
        byebug
        # TODO: Race.find_or_create_by(name: params[:race][:name]) + race_distance_id
        # TODO: user.user_races.create(race_params())
        # race_id
        # {"current_user_id"=>1, "race"=>{"name"=>"Charleston Marathon", "race_distance_id"=>"6", "race_date"=>"2020-01-11", "elapsed_time"=>"", "gun_time"=>"", "results_url"=>"", "bib_nbr"=>"", "division_name"=>"", "overall_place"=>"", "overall_finishers"=>"", "gender_place"=>"", "gender_finishers"=>"", "division_place"=>"", "division_finishers"=>"", "race_notes"=>""}
    end

    private

    def race_params(*args)
        params.require(:race).permit(*args)
    end
end
