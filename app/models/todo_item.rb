class TodoItem < ActiveRecord::Base
  attr_accessible :completed, :name, :location, :latitude, :longitude, :destination_id

  validates :location, :presence => true

  geocoded_by :my_cool_geocoding_method
  after_validation :geocode


  has_many :comments
  belongs_to :destination

  def my_cool_geocoding_method
    "#{location} #{destination.name}"
  end
end
