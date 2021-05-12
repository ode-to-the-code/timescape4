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
    #puts "memory_params[:content]:"
    #puts memory_params[:content]
    # byebug
     memory = Memory.create(memory_params)
    #memory = Memory.create(memory_params[:content])
    if memory.save
       render json: memory, status: 200
    end
      render json: {errors: memory.errors.full_messages}, status: :unprocessable_entity
    end


  def event_memories
    memories = Memory.where(event_id: params[:event_id]).all
    render json: memories, status: 200
  end


  private
    def memory_params
      params.require(:memory).permit(:content, :event_id)
    end


end
