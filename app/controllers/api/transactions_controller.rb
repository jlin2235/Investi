class Api::TransactionsController < ApplicationController
    #USED FOR POSTMAN TESTING NEED TO BE DELETED
    skip_before_action :verify_authenticity_token  

    #ONLY UPDATE THE SHARES SO FAR
    def create 
         
        if params[:transaction][:balance].to_f >= 0 #the params transactions will come from the container form
            @user_transaction = Transaction.where(user_id: params[:transaction][:user_id])
            #find all the users transaction
            
            @transaction_needed_to_update = @user_transaction.find_by(symbols: params[:transaction][:symbols])
            #within the user data find only the transactions with the matched symbol
            if @transaction_needed_to_update #IF able to find the transaction thats needed to be updated
                updated_transaction = @transaction_needed_to_update.shares + params[:transaction][:shares].to_i
                if updated_transaction > 0
                    @transaction_needed_to_update.update(shares: updated_transaction)
                    @transaction = @transaction_needed_to_update
                    puts @transaction
                    render :show
                elsif updated_transaction == 0
                    @transaction_needed_to_update.update(shares: updated_transaction)
                    @transaction = transaction_needed_to_update
                    @transaction_needed_to_update.destroy
                    render :show
                else
                    render json:["transaction unable to be completed"], status: 422
                end
            else
                @transaction = Transaction.new(transactions_param)
                if @transaction.shares >= 0
                    @transaction.save
                    render :show
                else
                    render json:["transaction unable to be completed"], status: 422
                end
            end


        end

    end

    def index 
        @transactions = Transaction.where(user_id: params[:transaction][:user_id].to_i)
        if @transactions
            render :index
        else
            render json: []
        end
    end

    def show
        debugger
        @transactions = Transaction.where(user_id: params[:transaction][:user_id].to_i)
        @transaction = @transactions.find_by(symbols: params[:transaction][:symbol])

        if @transaction
            render :show
        else
            render json: []
        end

        
    end


    private
    def transactions_param
        params.require(:transaction).permit(:purchase_price, :shares, :user_id, :symbols)
    end

end
