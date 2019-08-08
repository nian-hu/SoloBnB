class MessagesChannel < ApplicationCable::Channel 
  def subscribed 
    channel = Conversation.find(params[:channel])
    stream_for channel
  end

  def unsubscribed
  end
end