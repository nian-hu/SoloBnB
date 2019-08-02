class Api::ListingsController < ApplicationController
 # @listings = Listing.all;
    # @listings = params[:bounds] ? Listing.in_bounds(params[:bounds]) : Listing.all  

  def index  
    if params[:bounds]
      @listings = Listing.includes(:amenities).in_bounds(params[:bounds])
    else
      @listings = Listing.includes(:amenities).all
    end

    if @listings
      render :index 
    else
      render json: ['Listings not found'], status: 422
    end
  end 

  def show
    @listing = Listing.includes(:amenities).find(params[:id])
    @amenities = @listing.amenities

    if @listing 
      render :show 
    else 
      render json: ['Listing not found'], status: 422
    end
  end

  def listing_params
    params.require(:listing).permit(:title, :host_id, :description, :address, :city, :lat, :long, :price)
  end

  def bounds
    params[:bounds]
  end
end