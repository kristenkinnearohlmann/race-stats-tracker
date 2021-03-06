class CreateUserRaces < ActiveRecord::Migration[6.1]
  def change
    create_table :user_races do |t|
      t.date :race_date
      t.string :elapsed_time
      t.string :gun_time
      t.text :results_url
      t.string :bib_nbr
      t.string :division_name
      t.integer :overall_place
      t.integer :overall_finishers
      t.integer :gender_place
      t.integer :gender_finishers
      t.integer :division_place
      t.integer :division_finishers
      t.text :race_notes
      t.integer :age
      t.string :pace_miles
      t.string :pace_kilometers
      t.float :overall_rank
      t.float :gender_rank
      t.float :division_rank
      t.integer :phidippides_points
      t.references :user, null: false, foreign_key: true
      t.references :race, null: false, foreign_key: true

      t.timestamps
    end
  end
end
