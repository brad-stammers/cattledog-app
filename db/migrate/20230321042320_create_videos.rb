class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :video_type
      t.string :genre
      t.string :year
      t.string :season
      t.string :rating
      t.string :format
      t.string :location
      t.boolean :digital_copy
      t.string :digital_copy_location

      t.timestamps
    end
  end
end
