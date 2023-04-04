class Game < ApplicationRecord
  validates :title, :genre, :platform, :media, presence: true

  serialize :genre, Array
end
