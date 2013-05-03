class TodoItem < ActiveRecord::Base
  attr_accessible :completed, :name, :location, :latitude, :longitude, :destination_id

  validates :location, :presence => true

  geocoded_by :my_cool_geocoding_method
  after_validation :geocode


  has_many :comments
  has_many :likes
  belongs_to :destination
  belongs_to :user

  def my_cool_geocoding_method
    "#{location} #{destination.name}"
  end
end
