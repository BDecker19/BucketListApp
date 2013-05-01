class DestinationsController < ApplicationController

  def index
    items = TodoItem.near([params[:latitude], params[:longitude]])
    @destinations = items.map { |i| i.destination }.uniq

    respond_to do |format|
      format.html {
        render :template => 'destinations/index', :layout => 'application'
      }
      format.js {
        render :template => 'todo_items/cool_beans', :locals => { :destinations => @destinations }, :content_type => 'text/javascript'
      }
    end
  end

end
