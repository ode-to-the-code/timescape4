

class TestingController < ApplicationController


  def index
    render json: {success: 'testing was successful'}, status: 200
  end




end
