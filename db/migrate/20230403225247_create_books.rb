class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.string :author
      t.string :format
      t.string :series
      t.string :book_no
      t.string :location
      t.string :isbn

      t.timestamps
    end
  end
end
