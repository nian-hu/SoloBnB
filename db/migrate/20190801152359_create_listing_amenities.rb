class CreateListingAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :listing_amenities do |t|
      t.integer :listing_id, null: false 
      t.integer :amenity_id, null: false
      t.timestamps
    end
    add_index :listing_amenities, :listing_id 
    add_index :listing_amenities, :amenity_id
  end
end
