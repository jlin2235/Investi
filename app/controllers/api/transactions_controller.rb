class Api::TransactionsController < ApplicationController

    def create
        if params[:transaction][:balance].to_f >= 0 #the params transactions will come from the container form
            @user_data = Transaction.where(user_id: params[:transaction][:user_id])
            #find all the users transaction
            @data_needed_to_update = @user_data.find_by(symbols: params[:transaction][:symbols])
            #within the user data find only the transactions with the matched symbol
            # if @update_record
            #     updated_amount = 
            # end


        end

    end




    private
    def transactions_param
        params.require(:transaction).permit(:purchase_price, :shares, :user_id, :symbols)
    end

end
