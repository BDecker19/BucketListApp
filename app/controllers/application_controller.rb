class ApplicationController < ActionController::Base
  protect_from_forgery

before_filter :cool_beans

  def cool_beans
    session[:user_id] = User.first.id
  end
end
