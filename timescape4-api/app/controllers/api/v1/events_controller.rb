class Api::V1::EventsController < ApplicationController


# notes
# eager loading vs lazy loading- mass vs precision, one grabs everything
# each time while the other is more about what and when you need something
#
# an ability to create a memory that's associated with an event. and when we see
# an event we can see its associated memories. depending on how its done, you want
# to use a serializer like the fastjson api. (any backend setup uses a serializer)
#
# practice adding an event listener and how to update the dom from the event listener
# like when you click show memory, what it takes for that to work is to grab memories from
# the backend and update them to the dom. when you click a show memory button it can't be triggering
# all of them, its better to grab memories for that event
#
# this is the good stuff about js, the event listeners and stuff
#
# good way to practice is just create some new buttons and see how you update the DOM;
# being aware of where data is at various times,

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
