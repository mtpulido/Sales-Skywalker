class ChangeTypeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :to_dos, :type, :action
  end
end
