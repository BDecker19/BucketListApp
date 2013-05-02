class DestinationsController < ApplicationController

  def index
    lat = params[:latitude] || 40.7143528
    lng = params[:longitude] || -74.00597309999999
    items = TodoItem.near([lat, lng])
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
