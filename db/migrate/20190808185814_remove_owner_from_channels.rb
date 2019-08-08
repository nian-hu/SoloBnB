class RemoveOwnerFromChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :owner_id
  end
end
