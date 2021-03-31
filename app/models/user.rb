class User < ApplicationRecord
  has_secure_password
  has_many :businesses
  has_many :to_dos

  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
end
