class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user 
      login!(@user)
      render :show
    elsif !User.find_by(email: params[:user][:email])
      render json: ["There isn't an account associated with this email address. Please try another email or sign up."], status: 422
    else 
      render json: ["The password you entered is incorrect. Try again."], status: 422
    end


    # else
    #   render json: ["Invalid login credentials!"], status: 422
    # end
    
    # elsif !@user.find_by(email: params[:user][:email])
    #   render json: ["There isn't an account associated with this email address. Please try another email or sign up."], status: 422
    # else 
    #   render json: ["The password you entered is incorrect. Try again."], status: 422
    # end

   
  end

  def destroy
    # debugger
    if current_user
      logout!
      render json: {}
    else
      render json: ["No user is logged in!"], status: 404
    end
  end

end