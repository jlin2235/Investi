class Api::WatchlistsController < ApplicationController

     def create 
            @user_watchlist = Watchlist.where(user_id: params[:watchlist][:user_id])
            #find all the users watchlist
            
            @watchlist_needed_to_update = @user_watchlist.find_by(symbols: params[:watchlist][:symbols])
            #within the user data find only the watchlist with the matched symbol
            if @watchlist_needed_to_update #IF able to find the watchlist thats needed to be updated
                render json:["Already sdded to watchlist"], status: 422
            else
                @watchlist = TransWatchlistaction.new(watchlist_param)
                render :show
            end


        end

    end

    def index 
        @watchlists = Watchlist.where(user_id: params[:watchlist][:user_id].to_i)
        if @watchlists
            render :index
        else
            render json: []
        end
    end


    private
    def watchlist_param
        params.require(:watchlist).permit(:user_id, :symbols)
    end

end
