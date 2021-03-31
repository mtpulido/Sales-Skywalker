class CreateBusinesses < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.string :contact
      t.integer :phone_number
      t.string :email
      t.string :address
      t.string :industry
      t.boolean :client_status
      t.text :notes

      t.timestamps
    end
  end
end
