class TodoItemsController < ApplicationController

  def index
    o = params[:order] || :created_at
    @destinations = Destination.order(o).all
    @all_items = TodoItem.all

    respond_to do |format|
      format.html
      format.js {
        render :template => 'todo_items/cool_beans', :locals => { :destinations => @destinations }
      }
    end
  end

  def show
    @item = TodoItem.find(params[:id])
  end

  def create
    @item = TodoItem.new(params[:todo_item])
    @item.save!
    render :template => 'todo_items/create', :content_type => 'text/javascript'
  end


  def by_title

  end

  def by_created_at

  end

  def by_latitude

  end

end
