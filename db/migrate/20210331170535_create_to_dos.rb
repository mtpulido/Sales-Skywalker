class CreateToDos < ActiveRecord::Migration[6.1]
  def change
    create_table :to_dos do |t|
      t.references :user, null: false, foreign_key: true
      t.references :businesses, null: false, foreign_key: true
      t.string :content
      t.string :type

      t.timestamps
    end
  end
end
