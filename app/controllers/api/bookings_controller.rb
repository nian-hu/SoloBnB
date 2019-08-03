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
    @booking.guest_id = current_user.id
    @booking.listing_id = params[:listing_id]

    if @booking.save
      @guest = @booking.guest
      render :show
    else
      render json: ['Invalid booking'], status: 401
    end
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update_attributes(booking_params)
      render :show
    else
      render json: ['Invalid update'], status: 401
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render :index
  end

  private

  def booking_params
    params.require(:booking).permit(:listing_id, :guest_id, :start_date, :end_date)
  end

end