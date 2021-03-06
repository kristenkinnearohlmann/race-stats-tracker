# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_12_215607) do

  create_table "race_distances", force: :cascade do |t|
    t.string "distance_type"
    t.float "miles"
    t.float "kilometers"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "races", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.integer "race_distance_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["race_distance_id"], name: "index_races_on_race_distance_id"
  end

  create_table "user_races", force: :cascade do |t|
    t.date "race_date"
    t.string "elapsed_time"
    t.string "gun_time"
    t.text "results_url"
    t.string "bib_nbr"
    t.string "division_name"
    t.integer "overall_place"
    t.integer "overall_finishers"
    t.integer "gender_place"
    t.integer "gender_finishers"
    t.integer "division_place"
    t.integer "division_finishers"
    t.text "race_notes"
    t.integer "age"
    t.string "pace_miles"
    t.string "pace_kilometers"
    t.float "overall_rank"
    t.float "gender_rank"
    t.float "division_rank"
    t.integer "phidippides_points"
    t.integer "user_id", null: false
    t.integer "race_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["race_id"], name: "index_user_races_on_race_id"
    t.index ["user_id"], name: "index_user_races_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.date "date_of_birth"
    t.string "gender"
    t.text "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "races", "race_distances"
  add_foreign_key "user_races", "races"
  add_foreign_key "user_races", "users"
end
