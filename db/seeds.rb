# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Business.destroy_all

@mike = User.create!(email: 'mike@email.com', password: 'password1', phone_number: '9786096877', quota_annual: '150000')
@tim = User.create!(email: 'tim@email.com', password: 'password1', phone_number: '9786095441', quota_annual: '150000')
puts "#{User.count} users created"

Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @tim, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)
Business.create!(name: Faker::Company, contact: Faker::Name, user: @mike, phone_number: Faker::PhoneNumber, email: Faker::Internet.email, address: Faker::Address, industry: Faker::IndustrySegments)

puts "#{Business.count} businesses created"