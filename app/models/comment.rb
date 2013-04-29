class Comment < ActiveRecord::Base
  attr_accessible :body, :todo_item_id

  belongs_to :todo_item
end
