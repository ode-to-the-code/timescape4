


def event_memories
  memories = Memory.where(event_id: params[:event_id])
  render json, status 200
end




how to render json from related models in a single controller action. option 1- using a
custom hash:

def show
  sighting = Sighting.find_by(id: params[:id])
  render json: {id: sighting.id, bird: sighting.bird, }
end

another way to render json for related models in one controller action: using include.

def show
  event = Event.find_by(id: params[:id])
  render json: sighting, include: [:bird, :location]
end
