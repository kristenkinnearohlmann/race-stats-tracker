class RacesSerializer

    def initialize(race_obj)
        @race = race_obj
    end

    def to_serialized_json
        options = {
            include: {
                user_races: {
                    except: [:updated_at, :created_at]
                }
            },
            except: [:updated_at, :created_at]
        }
        @race.to_json(options)
    end

end