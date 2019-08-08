class Api::ChannelsController < ApplicationController 
  # def index
  #   channels = Channel.all
  #   render json: channels
  # end

  # def create
  #   channel = Channel.new(channel_params)
  #   if channel.save
  #     serialized_data = ActiveModelSerializers::Adapter::Json.new(
  #       ChannelSerializer.new(channel)
  #     ).serializable_hash
  #     ActionCable.server.broadcast 'chat_channel', serialized_data
  #     head :ok
  #   end
  # end

  def create 
    channel = Channel.new(channel_params)
    if channel.save 
      ownership1 = ChannelMember.new()
      ownership1.channel_id = channel.id
      ownership1.user_id = params['sender_id']
      ownership1.save 
      ownership2 = ChannelMember.new()
      ownership2.channel_id = channel.id
      ownership2.user_id = params['receiver_id']
      ownership2.save 

      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ChannelSerializer.new(channel)
      ).serializable_hash

      ActionCable.server.broadcast(
        "current_user_#{current_user.id}", 
        serialized_data
      )

      ActionCable.server.broadcast(
        "current_user_#{params['receiver_id']}", 
        serialized_data
      )

      head :ok
      
    end
  end
  
  private
  
  def channel_params
    params.require(:channel).permit(:name, :sender_id, :receiver_id)
  end
end