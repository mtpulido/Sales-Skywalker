class ChangeQuotaUser < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :quota_annual, :string
  end
end
