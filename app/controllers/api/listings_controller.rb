class Api::ListingsController < ApplicationController
  def index 
    @listings = Listing.all;
    # @listings = params[:bounds] ? Listing.in_bounds(params[:bounds]) : Listing.all  
    if @listings
      render :index 
    else
      render json: ['Listings not found'], status: 422
    end
  end 

  def show
    @listing = Listing.find(params[:id])
    if @listing 
      render :show 
    else 
      render json: ['Listing not found'], status: 422
    end
  end

  def listing_params
    params.require(:listing).permit(:title, :host_id, :description, :address, :city, :lat, :long, :price)
  end

  # def bounds
  #   params[:bounds]
  # end
end