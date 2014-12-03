# == Schema Information
#
# Table name: artists
#
#  id           :integer          not null, primary key
#  name         :string(255)
#  hometown     :string(255)
#  bio          :text
#  years_active :string(255)
#  label        :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class Artist < ActiveRecord::Base
	validates :name, presence: true
	validates :hometown, presence: true
	validates :bio, presence: true
	validates :years_active, presence: true
	validates :label, presence: true
	
end
