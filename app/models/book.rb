class Book < ApplicationRecord
  validates :title, :author, :format, presence: true

  serialize :format, Array
  
end
