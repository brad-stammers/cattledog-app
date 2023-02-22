json.extract! video, :id, :title, :genre, :year, :rating, :format, :location, :created_at, :updated_at
json.url video_url(video, format: :json)
