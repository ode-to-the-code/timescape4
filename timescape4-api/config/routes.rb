Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    # post"api/v1/events", to: "events#create"
    get "testing/api/v1/events", to: "testing#index"
    namespace :api do
      namespace :v1 do
        resources :events
        # get 'api/v1/events'
        # get 'api/v1/events/:id'
        # put 'api/v1/events/:id'
        # 'api/v1/events/:id/memories'
        resources :memories
        get 'memories/by_event/:event_id', to: 'memories#event_memories'
        # namespace :memories do
      # route that request to the event memories action in the controller
            # get "by_event/:event_id", action: :event_memories, controller: "memories"
            # get "by_event/:event_id => memories#event_memories"
        # end
      end
    end
end
