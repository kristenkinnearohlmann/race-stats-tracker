class RaceDistancesSerializer

    def initialize(race_distance_obj)
        @race_distance = race_distance_obj
    end

    def to_serialized_json
        options = {
            except: [:updated_at, :created_at]
        }
        @race_distance.to_json(options)
    end

end