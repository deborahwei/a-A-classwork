# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all
Cat.create!(birth_date: '2016/02/19', color: "red", name: "Claudia", description: "Is a bad cat", sex: "m")
Cat.create!(birth_date: '2012/12/21', color: "orange", name: "Clarence", description: "Is a good cat", sex: "f")
Cat.create!(birth_date: '2011/10/09', color: "grey", name: "Cameron", description: "Is a loud cat", sex: "m")
Cat.create!(birth_date: '2010/08/03', color: "black", name: "Charles", description: "Is a fat cat", sex: "f")
Cat.create!(birth_date: '2009/06/12', color: "yellow", name: "ChaCha", description: "Is a small cat", sex: "m")
