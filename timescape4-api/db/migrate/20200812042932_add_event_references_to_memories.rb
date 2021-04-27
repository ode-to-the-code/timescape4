class AddEventReferencesToMemories < ActiveRecord::Migration[5.2]
  def change
    add_reference :memories, :event, foreign_key: true
  end
end
