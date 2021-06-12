class CreateRaceDistances < ActiveRecord::Migration[6.1]
  def change
    create_table :race_distances do |t|
      t.string :distance_type
      t.decimal :distance_miles
      t.decimal :distance_kilometers

      t.timestamps
    end
  end
end
