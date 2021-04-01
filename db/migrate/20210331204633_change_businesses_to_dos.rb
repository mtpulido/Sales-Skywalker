class ChangeBusinessesToDos < ActiveRecord::Migration[6.1]
  def change
    rename_column :to_dos, :businesses_id, :business_id 
  end
end
