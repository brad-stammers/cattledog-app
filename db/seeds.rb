# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Video.create(title: "The Matrix", video_type: "Movie", location: "Case 1 Drawer 3", genre: ["Science Fiction", "Action"], season: "", year: "2003", rating: "M", format: ["DVD"], digital_copy: true, digital_copy_location: ["HDD"])
Video.create(title: "Fast and Furious - Hobbs and Shaw", video_type: "Movie", location: "Case 1 Drawer 2", genre: ["Action"], season: "", year: "2019", rating: "M", format: ["Bluray", "DVD"], digital_copy: true, digital_copy_location: ["HDD","iTunes"])
