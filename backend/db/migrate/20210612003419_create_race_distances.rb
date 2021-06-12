class CreateRaceDistances < ActiveRecord::Migration[6.1]
  def change
    create_table :race_distances do |t|
      t.string :distance_type
      t.float :miles
      t.float :kilometers

      t.timestamps
    end
  end
end
