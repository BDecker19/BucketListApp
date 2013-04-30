require 'test_helper'

class TodoItemTest < ActiveSupport::TestCase

  context "A todo item" do
    setup do
      @destination = Destination.create(:name => "New York")
      @todo_item = TodoItem.create(:name => "Drink Picklebacks", :location => "618 Grand St.",
        :destination => @destination)
    end

    should "put values in the latitude and longitude" do
      assert_not_nil @todo_item.latitude
      assert_not_nil @todo_item.longitude
    end

    should "use a better input for geocoding" do
      assert_equal "618 Grand St. New York", @todo_item.my_cool_geocoding_method
    end
  end

end
