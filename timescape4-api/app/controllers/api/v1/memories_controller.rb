class Api::V1::MemoriesController < ApplicationController


  def index
    memories = Memory.all
    render json: memories, status: 200
  end

  def show
    memory = Memory.find(params[:id])
    render json: memory, status: 200
  end

  def create
    memory = Memory.create(memory_params)
    render json: memory, status: 200
  end

  def event_memories
    memories = Memory.where(event_id: params[:event_id]).all
    render json: memories, status: 200
  end

  private
    def memory_params
      params.require(:memory).permit(:content)
    end


end
