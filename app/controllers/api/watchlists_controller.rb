class Api::WatchlistsController < ApplicationController
 skip_before_action :verify_authenticity_token  

    def create 
            @user_watchlist = Watchlist.where(user_id: params[:watchList][:user_id])
            #find all the users watchlist
            
            @watchlist_needed_to_update = @user_watchlist.find_by(symbols: params[:watchList][:symbols])
            #within the user data find only the watchlist with the matched symbol
            if @watchlist_needed_to_update #IF able to find the watchlist thats needed to be updated
                render json:["Already added to watchlist"], status: 422
            else
                @watchlist = Watchlist.new(watchlist_param)
                if @watchlist.save
                    render :show
                else
                    render json:["Unable to add to watchlist"], status: 422
                end

            end
    end

    def index 
        @watchlists = Watchlist.where(user_id: params[:watchList][:user_id].to_i)
        if @watchlists
            render :index
        else
            render json: []
        end
    end

    def show
        @watchlists = Watchlist.where(user_id: params[:watchList][:user_id].to_i)
        @watchlist = @watchlists.find_by(symbols: params[:watchList][:symbol])
        if @watchlist
            render :show
        else
            render json: []
        end
    end

    def destroy 
            @user_watchlist = Watchlist.where(user_id: params[:watchList][:user_id])
            #find all the users watchlist
            
            @watchlist = @user_watchlist.find_by(symbols: params[:watchList][:symbols])
            #within the user data find only the watchlist with the matched symbol
            if @watchlist #IF able to find the watchlist thats needed to be updated
                @watchlist.destroy
                render :show
            else
                render json:["Not on watchlist"], status: 422
            end
    end


    private
    def watchlist_param
        params.require(:watchList).permit(:user_id, :symbols)
    end


end
