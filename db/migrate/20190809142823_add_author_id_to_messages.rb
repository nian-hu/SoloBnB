class AddAuthorIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :author_id, :integer
  end
end
