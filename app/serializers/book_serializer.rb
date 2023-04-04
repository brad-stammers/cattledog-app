class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :author, :format, :location, :isbn
end
