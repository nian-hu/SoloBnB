class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    # @review.listing_id = params[:listing_id]

    if @review.save 
      @user = @review.user
      render :show
    else 
      render json: @review.errors.full_messages, status: 422
    end
  end 

  def index
    # debugger
    # @reviews = Review.where(listing_id: params[:review][:listing_id])
    @reviews = Review.where(listing_id: params[:listing_id])

    render :index
  end 

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy 
    render json: ['Review deleted']
  end

  private
  def review_params
    params.require(:review).permit(:body, :accuracy, :communication, :cleanliness, :location, :check_in, :value, :listing_id)
  end

end