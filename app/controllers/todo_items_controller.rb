class TodoItemsController < ApplicationController

  def index
    @items = TodoItem.all
  end

  def show
    @item = TodoItem.find(params[:id])
  end

end
