# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :password_digest, :fname, :lname, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :photo

  has_many :listings,
    primary_key: :id,
    foreign_key: :host_id, 
    class_name: :Listing

  has_many :bookings,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Booking

  has_many :reviews,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Review

  # has_many :owned_channels,
  #   primary_key: :id,
  #   foreign_key: :owner_id,
  #   class_name: :Channel 

  has_many :channel_members,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ChannelMember 

  has_many :channels,
    through: :channel_members,
    source: :channel

  has_many :messages,
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :Message

  # def existing_chats_users
  #   existing_chat_users = []
  #   self.channels.each do |channel|
  #     existing_chat_users.concat(channel.channel_members.where.not(user_id: self.id).map {|channel_member| channel_member.user})
  #   end
  #   existing_chat_users.uniq
  # end
  

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

end
