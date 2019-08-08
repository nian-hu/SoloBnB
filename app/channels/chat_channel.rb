class ChatChannel < ApplicationCable::Channel
  def subscribed 
    # @chat_channel = Channel.find(params[:id])
    # stream_for @chat_channel
    
    # this works for group chat:
    # stream_from 'chat_channel'

    # this is for a private channel:
    # stream_for `current_user_#{current_user.id}`
    stream_from "current_user_#{current_user.id}"
  end

  ## since we are doing broadcasting in our channels/messages controller instead
  # def speak(data)
  #   message = Message.new(body: data["message"])
  #   # @message.author_id = User.first.id
  #   # @message.messageable_id = Channel.first.id
  #   if message.save 
  #     socket = { message: message.body, type: "message" }
  #     # THIS WORKS
  #     ChatChannel.broadcast_to('chat_channel', socket)
  #     # ChatChannel.broadcast_to(`current_user_#{current_user.id}`, socket)
  #   end
  # end 

  # def load 
  #   messages = Message.all.collect(&:body)
  #   # @messages = @chat_channel.messages.all.collect(&:body)
  #   socket = { messages: messages, type: "messages" }
  #   # THIS WORKS
  #   # ChatChannel.broadcast_to('chat_channel', socket)
  #   ChatChannel.broadcast_to(`current_user_#{current_user.id}`, socket)
  # end

  def unsubscribed 
  end
end