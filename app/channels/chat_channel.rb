class ChatChannel < ApplicationCable::Channel
  def subscribed 
    # @chat_channel = Channel.find(params[:id])
    # stream_for @chat_channel
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.new(body: data["message"])
    # @message.author_id = User.first.id
    # @message.messageable_id = Channel.first.id
    if message.save 
      socket = { message: message.body, type: "message" }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end 

  def load 
    messages = Message.all.collect(&:body)
    # @messages = @chat_channel.messages.all.collect(&:body)
    socket = { messages: messages, type: "messages" }
    # ChatChannel.broadcast_to(@chat_channel, socket)
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed 
  end
end