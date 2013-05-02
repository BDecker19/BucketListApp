Bucketlist::Application.routes.draw do
  resources :comments, :only => :create

  resources :destinations, :only => :index do
    resources :todo_items, :only => [:index, :create]
  end

  root :to => 'destinations#index'
end
