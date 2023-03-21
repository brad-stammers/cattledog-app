class Video < ApplicationRecord
  validates :title, :genre, :format, :video_type, presence: true

  serialize :format, Array
  serialize :genre, Array
  serialize :digital_copy_location, Array
end
