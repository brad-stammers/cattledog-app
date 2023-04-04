json.extract! game, :id, :title, :genre, :platform, :media, :publisher, :rating, :vr, :created_at, :updated_at
json.url game_url(game, format: :json)
