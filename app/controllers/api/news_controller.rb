require 'open-uri'

class Api::NewsController < ApplicationController
     def index
        newsapi_key = Rails.application.credentials.iex_client[:news_api_token]
        url = "http://newsapi.org/v2/top-headlines?country=us&apiKey=#{newsapi_key}"
        @response_body = JSON.parse(open(url).read)
        render json:@response_body
    end

end
