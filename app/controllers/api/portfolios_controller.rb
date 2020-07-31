class Api::PortfoliosController < ApplicationController

    def show
        #current_user comes from ApplicationController, portfolio
        #is a association that comes from User Model 
        @portfolio = current_user.portfolio

        if @portfolio
            render 'api/portfolios/show'
        else    
            render json: @portfolio.errors.full_messages, status: 422
        end

    end


end
