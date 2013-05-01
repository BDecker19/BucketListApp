Bucketlist::Application.routes.draw do
  resources :comments, :only => :create
  resources :todo_items, :only => :create
  resources :destinations, :only => :index

  root :to => 'destinations#index'
end
