class ChatChannel < ApplicationCable::Channel
  def subscribed 
    @chat_channel = Channel.first
    stream_for @chat_channel
    # stream_for 'chat_channel'
  end

  def speak(data)
    @message = @chat_channel.messages.new(body: data["message"])
    @message.author_id = current_user.id
    @message.channel_id = @chat_channel.id
    if @message.save 
      socket = { message: @message.body, type: "message" }
      ChatChannel.broadcast_to(@chat_channel, socket)
    end
  end 

  def load 
    messages = Message.all.collect(&:body)
    # @messages = @chat_channel.messages.all.collect(&:body)
    socket = { messages: messages, type: "messages" }
    # ChatChannel.broadcast_to(@chat_channel, socket)
    ChatChannel.broadcast_to(@chat_channel, socket)
  end

  def unsubscribed 
  end
end