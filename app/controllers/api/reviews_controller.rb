class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id

    if @review.save 
      @user = @review.user
      render :create
    else 
      render json: @review.errors.full_messages, status: 422
    end
  end 

  def index
    @reviews = Review.where(listing_id: params[:listing_id])
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
    params.require(:review).permit(:listing_id, :body, :accuracy, :communication, :cleanliness, :location, :check_in, :value)
  end

end