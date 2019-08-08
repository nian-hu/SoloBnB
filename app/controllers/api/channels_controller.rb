require 'securerandom'

class ChatsController < ApplicationController
  before_action :require_login

  def index
    channels = current_user.channels
    @existing_chats_users = current_user.existing_chats_users
  end

  def create
    @other_user = User.find(params[:other_user])
    @channel = find_channel(@other_user) || Channel.new(name: SecureRandom.hex)
    if !@channel.persisted?
      @channel.save
      @channel.channel_members.create(user_id: current_user.id)
      @channel.channel_members.create(user_id: @other_user.id)
    end
    redirect_to user_channel_url(current_user, @channel,  :other_user => @other_user.id) 
  end

  def show
    @other_user = User.find(params[:other_user])
    @channel = Channel.find_by(id: params[:id])
    @message = Message.new
  end

private
  def find_channel(second_user)
    channels = current_user.channels
    channels.each do |channel|
      channel.channel_members.each do |channel_member|
        if channel_member.user_id == second_user.id
          return channel
        end
      end
    end
    nil
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end
end