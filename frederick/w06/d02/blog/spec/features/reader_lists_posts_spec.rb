require 'rails_helper'

feature "ReaderListsPosts", :type => :feature do
  scenario "there is no blog posts" do
  	visit '/'
  	expect(page).to have_content("No blog posts found")
  end
end
