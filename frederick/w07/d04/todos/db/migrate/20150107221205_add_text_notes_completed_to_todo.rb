class AddTextNotesCompletedToTodo < ActiveRecord::Migration
  def change
    add_column :todos, :text, :text
    add_column :todos, :notes, :text
    add_column :todos, :completed, :boolean
  end
end
