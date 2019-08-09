class RemoveAuthorIdFromMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :author_id
  end
end
