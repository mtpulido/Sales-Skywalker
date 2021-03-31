class ChangePhoneNumberBusiness < ActiveRecord::Migration[6.1]
  def change
    change_column :businesses, :phone_number, :string
  end
end
