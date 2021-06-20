class StaticController < ApplicationController

    def home
        render json: {msg: "Race Stats Tracker"}
    end

end