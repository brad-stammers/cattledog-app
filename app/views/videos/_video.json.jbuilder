json.extract! video, :id, :title, :video_type, :genre, :year, :season, :rating, :format, :location, :digital_copy, :digital_copy_location, :created_at, :updated_at
json.url video_url(video, format: :json)
