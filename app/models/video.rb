class Video < ApplicationRecord
  validates :title, :genre, :format, presence: true
end
