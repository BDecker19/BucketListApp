Bucketlist::Application.routes.draw do
  resources :comments, :only => :create
  resources :todo_items, :only => [:index, :show]
end
