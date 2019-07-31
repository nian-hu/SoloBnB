class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false 
      t.string :title, null: false 
      t.text :description, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.float :lat, null: false 
      t.float :long, null: false 
      t.float :price, null: false
      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :city
    add_index :listings, :address, unique: true 
  end
end
