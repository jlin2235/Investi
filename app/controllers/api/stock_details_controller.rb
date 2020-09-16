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
    
    
     def stock_params
    params.require(:stock).permit(:symbol)
    # NEST EVERYTHING UNDER STOCK
  end


end
