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

  def like
    todo_item = TodoItem.find(params[:id])
    Like.create(:todo_item_id => todo_item.id, :user_id => session[:user_id])
    render :nothing => true
  end

end
