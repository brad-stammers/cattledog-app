# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Video.create(title: 'The Matrix', genre: 'Science Fiction', year: '1999', rating: 'M', format: 'DVD', location: 'Case 1 Drawer 3' )
Video.create(title: 'Iron Man', genre: 'Science Fiction', year: '2008', rating: 'PG-13', format: 'DVD', location: 'Case 1 Drawer 3' )
