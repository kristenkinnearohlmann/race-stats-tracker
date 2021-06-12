class CreateRaces < ActiveRecord::Migration[6.1]
  def change
    create_table :races do |t|
      t.string :name
      t.string :url
      t.references :race_distance, null: false, foreign_key: true

      t.timestamps
    end
  end
end
