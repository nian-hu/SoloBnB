class Api::MessagesController < ApplicationController
  before_action :ensure_logged_in

  def index 
    @messages = Message.where(messageable_id: params[:channel_id])
    render :index
  end

  def create 
    @message = Message.new(message_params)
    @message.author_id = current_user.id
    @message.messageable_id = params[:channel_id]
    if @message.save 
      render :show
    else 
      render json: @message.errors.full_messages, status: 422
    end
  end

  private 
  def message_params
    params.require(:message).permit(:body)
  end

end