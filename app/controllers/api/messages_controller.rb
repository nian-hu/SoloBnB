class Api::MessagesController < ApplicationController
  # before_action :ensure_logged_in

  # def index 
  #   @messages = Message.where(messageable_id: params[:channel_id])
  #   render :index
  # end

  def create 
    message = Message.new(message_params)
    channel = Channel.find(message_params[:channel_id])

    # @message.author_id = current_user.id
    # @message.messageable_id = params[:channel_id]
    # if @message.save 
    #   render :show
    # else 
    #   render json: @message.errors.full_messages, status: 422
    # end

    if message.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        MessageSerializer.new(message)
      ).serializable_hash
      MessagesChannel.broadcast_to channel, serialized_data
      head :ok
    end

  end

  private 
  def message_params
    params.require(:message).permit(:body, :channel_id)
  end

end