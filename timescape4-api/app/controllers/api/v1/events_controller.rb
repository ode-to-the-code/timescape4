class Api::V1::EventsController < ApplicationController



  def index
    events = Event.all
    render json: events, status: 200
  end

  def show
    event = Event.find(params[:id])
    render json: event, status: 200
  end

  # def create
  #   event = Event.create(event_params)
  #   render json: event, status: 200
  # end

  def create
    event = Event.create(event_params)
    if event.save
      render json: event, status: 200
    else
      render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    event = Event.find(params[:id])
    event = event.update(event_params)
    render json: event, status: 200
  end

  def destroy
  # maybe i can add a message alert for the front when something is deleted
    event = Event.find(params[:id])
    event.delete
    render json: {eventId: event.id}
  end

  private
    def event_params
      puts params
      # params.require(:event).permit(:title, :occurence_date)
      params.require(:event).permit(:title)
    end


end
