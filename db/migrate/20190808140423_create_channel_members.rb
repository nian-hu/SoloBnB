class CreateChannelMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_members do |t|
      t.integer :channel_id, null: false 
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :channel_members, :channel_id 
    add_index :channel_members, :user_id
  end
end
