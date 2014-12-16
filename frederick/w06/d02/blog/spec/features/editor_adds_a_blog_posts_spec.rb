require 'rails_helper'

feature "EditorAddsABlogPosts", :type => :feature do
	scenario "valid input" do
		visit '/'
		click_link 'Add Post'
		fill_in('Title', with: 'Hello World')
		fill_in('Content', with: 'Lorem ipsum dolar sit amet')
		fill_in('Author', with: 'Jane Doe')
	end

end
