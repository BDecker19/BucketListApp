class AddLocationToTodoItems < ActiveRecord::Migration
  def change
    add_column :todo_items, :location, :string
    add_column :todo_items, :latitude, :float
    add_column :todo_items, :longitude, :float
  end
end
