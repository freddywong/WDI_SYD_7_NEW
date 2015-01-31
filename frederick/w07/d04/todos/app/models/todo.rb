# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  text       :text
#  notes      :text
#  completed  :boolean
#

class Todo < ActiveRecord::Base
end
