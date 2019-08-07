class Api::ListingsController < ApplicationController
 # @listings = Listing.all;
    # @listings = params[:bounds] ? Listing.in_bounds(params[:bounds]) : Listing.all  

  def index  
    # if params[:bounds]
    #   @listings = Listing.with_attached_photos.includes(:amenities).in_bounds(params[:bounds])
    # else
    #   @listings = Listing.with_attached_photos.includes(:amenities).all
    # end
    # debugger

    if params[:filterObj][:dates].values.any?('null')
      @listings = Listing.with_attached_photos.includes(:amenities, :reviews).in_bounds(params[:filterObj][:bounds])
    elsif params[:filterObj][:dates].values.any?('')
      # debugger
      @listings = Listing.with_attached_photos.includes(:amenities, :reviews).in_bounds(params[:filterObj][:bounds])
    else
      @listings = Listing.with_attached_photos.includes(:amenities, :reviews).available_in_bounds(params[:filterObj][:bounds], params[:filterObj][:dates])
    end

    if @listings
      render :index 
    else
      render json: ['Listings not found'], status: 422
    end
  end 

  def show
    @listing = Listing.with_attached_photos.includes(:amenities, :reviews).find(params[:id])
    @amenities = @listing.amenities

    if @listing 
      render :show 
    else 
      render json: ['Listing not found'], status: 422
    end
  end

  private

  # def listing_params
  #   params.require(:listing).permit(:title, :host_id, :description, :address, :city, :lat, :long, :price, photos: [])
  # end

  def bounds
    params[:filterObj][:bounds]
  end

  def dates
    params[:filterOb][:dates] 
    # this is an object 
    # { startDate: _, endDate: _ }
  end
end