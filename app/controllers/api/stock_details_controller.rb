class Api::StockDetailsController < ApplicationController
    def show  
        #make sure to upcase it
        @stock = StockDetail.new_lookup(stock_params[:stock].upcase) 
        if @stock
            render :show
        else
            render json: @stock.errors.full_messages, status: 422
        end
    end

    def index
        @stocks = StockDetail.all
        render :index
    end

    # def create
    #     # debugger
    #     @new_stock = StockDetail.new_lookup(stock_params[:stock].upcase)
    #     @stockExist = StockDetail.find_by(symbol: params[:symbol].upcase) 

    #     if @new_stock && @stockExist
    #         @stock = StockDetail.create!(company: @new_stock.company_name, symbol:@new_stock.symbol)
    #     render "api/stock_details/show"
    #     else  
    #     render json: @new_stock.errors.full_messages, status: 422
    #     end
    # end      
    
     def stock_params
    params.require(:stock).permit(:symbol)
    # NEST EVERYTHING UNDER USER
  end


end
