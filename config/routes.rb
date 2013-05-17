Bucketlist::Application.routes.draw do
  resources :comments, :only => :create

  resources :destinations, :only => :index do
    resources :todo_items, :only => [:index, :create] do
      member do
        post :like
      end
    end
  end

  resources :crimes, :only => [] do
    collection do
      get :stats
    end
  end

  root :to => 'destinations#index'
end
