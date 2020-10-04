class Api::UsersController < ApplicationController

  def create
    #  
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update #USED TO UPDATE BALANCE AMT WHEN USER MAKES TRANSACTION
    @user = User.find_by(id: params[:transaction][:user_id])
    @user_transactions = Transaction.where(user_id: params[:transaction][:user_id])
    @transaction_needed_to_update = @user_transactions.find_by(symbols: params[:transaction][:symbols])
    if !@transaction_needed_to_update && params[:transaction][:shares].to_i < 0
        #if there are not transaction of the stock and the user didn't make any transaction
      render :show
    elsif @transaction_needed_to_update && @transaction_needed_to_update.shares + params[:transaction][:shares].to_i < 0
        #if there is the transaction of the stock but not enough shares (negative)
      render :show
    else
      if params[:transaction][:balance].to_f >= 0
        #will get the balance in the frontend (CALCULATED AMOUNT)
      @user.update(balance: params[:transaction][:balance].to_f)
      render :show
      else
        debugger
        render json: ['not enough cash'], status: 404
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name,:balance )
    # NEST EVERYTHING UNDER USER
  end

end
