class TodoItemsController < ApplicationController

  def index
    o = params[:order] || :created_at
    @items = TodoItem.all.order(o)
  end

  def create
    @item = TodoItem.new(params[:todo_item])
    @item.save!
    render :template => 'todo_items/create', :content_type => 'text/javascript'
  end

end
