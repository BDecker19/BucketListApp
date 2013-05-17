class CrimesController < ApplicationController


  def stats
    # render :json => JSON.parse(File.open('/Users/daniel/Desktop/example.json').read)
    url = "http://data.police.uk/api/crimes-street/all-crime?lat=#{params[:latitude]}&lng=#{params[:longitude]}&date=2012-03"
    render :json => HTTParty.get(url)
  end

end
