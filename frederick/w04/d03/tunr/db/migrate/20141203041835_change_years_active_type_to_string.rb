class ChangeYearsActiveTypeToString < ActiveRecord::Migration
  def change
  	change_column :artists, :years_active, :string
  end
end
