class Like < ActiveRecord::Base
  attr_accessible :todo_item_id, :user_id

  belongs_to :user
  belongs_to :todo_item
end
