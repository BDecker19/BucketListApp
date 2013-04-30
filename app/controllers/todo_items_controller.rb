class TodoItemsController < ApplicationController

  def index
    @destinations = Destination.all
  end

  def show
    @item = TodoItem.find(params[:id])
  end

  def create
    @item = TodoItem.new(params[:todo_item])
    @item.save!
    render :template => 'todo_items/create', :content_type => 'text/javascript'
  end

end
