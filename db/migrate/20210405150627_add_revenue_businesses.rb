class AddRevenueBusinesses < ActiveRecord::Migration[6.1]
  def change
    add_column :businesses, :sale_revenue, :string
  end
end
