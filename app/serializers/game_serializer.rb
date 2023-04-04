class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :platform, :media, :publisher, :rating, :vr
end
