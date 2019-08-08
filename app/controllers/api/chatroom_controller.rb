class Api::ChatroomController < ApplicationController
  def messages
    @channel = Channel.find(params[:id])
    if @channel
      @messages = @channel.messages 
      render 'api/messages/index'
    end
  end
end