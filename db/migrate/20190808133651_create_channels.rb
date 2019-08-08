class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false 
      t.timestamps
    end
  end
end
