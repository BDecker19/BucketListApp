require 'test_helper'

class TodoItemsControllerTest < ActionController::TestCase

  context "The TodoItems Controller" do
    setup do
      @destination = Destination.create(:name => "New York")
      3.times { TodoItem.create(:destination_id => @destination.id, :location => "E 21st Street") }
    end

    context "GET to index" do
      setup do
        get :index
      end

      should "give me a HTTP 200" do
        assert_response :success
      end

      should "give me 3 Todo Items" do
        assert_equal [@destination], assigns(:destinations)
        assert_equal 3, assigns(:destinations).first.todo_items.length
      end
    end

    context "GET to show" do
      setup do
        get :show, :id => 1
      end

      should "give me a HTTP 200" do
        assert_response :success
      end

      should "give me 1 Todo Item" do
        assert_equal TodoItem.find(1), assigns(:item)
      end

    end

    context "POST to create" do
      setup do
        xhr :post, :create, :todo_item => { :name => "Drink a Pickleback", :location => "618 Grand St.",
          :destination_id => @destination.id }
      end

      should "create a todo item" do
        assert_equal 4, TodoItem.count
        assert_equal "Drink a Pickleback", assigns(:item).name
        assert_equal @destination, assigns(:item).destination
      end

    end
  end

end
