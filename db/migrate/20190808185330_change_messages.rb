class ChangeMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :messageable_id
    add_column :messages, :channel_id, :integer
  end
end
