json.extract! book, :id, :title, :genre, :author, :format, :location, :isbn, :created_at, :updated_at
json.url book_url(book, format: :json)
