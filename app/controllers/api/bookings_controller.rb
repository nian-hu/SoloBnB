class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.where(guest_id: current_user.id).order(start_date: :asc)
    render :index
  end

  def show
    @booking = Booking.find(params[:id])
    render :show
  end

  def create
    @booking = Booking.new(booking_params)
    # @booking.end_date = params[:booking][:end_date]
    # debugger

    @booking.guest_id = current_user.id
    # @booking.listing_id = params[:listing_id]

    # the param i'm passing in is formatted as day month year 
    # but i'm sending up month day year

    # year month day


    # debugger

    if @booking.save
      @guest = @booking.guest
      # debugger
      render :show
    else
      # debugger
      render json: ['Invalid booking'], status: 422
    end
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update_attributes(booking_params)
      render :show
    else
      render json: ['Invalid update'], status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render json: ['Booking canceled']
  end

  private

  def booking_params
    params.require(:booking).permit(:listing_id, :guest_id, :start_date, :end_date)
  end

end