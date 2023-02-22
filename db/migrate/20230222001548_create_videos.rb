class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title
      t.string :genre
      t.string :year
      t.string :rating
      t.string :format
      t.string :location

      t.timestamps
    end
  end
end
