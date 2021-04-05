# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all

@mike = User.create!(name: 'mike', email: 'mike@email.com', password: 'password', phone_number: '9786096877', quota_annual: '150000')
@tim = User.create!(name: 'tim', email: 'tim@email.com', password: 'password', phone_number: '9786095441', quota_annual: '150000')
puts "#{User.count} users created"

10.times do 
  Business.create!(name: Faker::Company.name, contact: Faker::Name.name, user: @mike, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, address: Faker::Address.full_address, industry: Faker::IndustrySegments.industry, client_status: false, sale_revenue: nil, notes: nil)
  end
10.times do 
  Business.create!(name: Faker::Company.name, contact: Faker::Name.name, user: @tim, phone_number: Faker::PhoneNumber.cell_phone, email: Faker::Internet.email, address: Faker::Address.full_address, industry: Faker::IndustrySegments.industry, client_status: false, sale_revenue: nil, notes: nil)
  end
puts "#{Business.count} businesses created"