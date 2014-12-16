require 'rails_helper'

feature "ReaderReadsABlogPosts", :type => :feature do
  scenario "does exist without comments" do
    Post.create(
      title: "Yo",
      author: "Freddy Mercury",
      content: "Rah!"
      )

      visit '/'
      click_link("Yo")

      expect(page).to have_content("Yo")
      expect(page).to have_content("Freddy Mercury")
      expect(page).to have_content("Rah!")
      end

  scenario "does exist with comments" do
    post = Post.create(
      title: "What's Up?",
      author: "Bryan May",
      content: "Lorem ipsum"
      )

    post.comments.create(
      content: "Blah blah blah"
      )

    visit '/'
    click_link("What's Up?")

    expect(page).to have_content("What's Up?")
    expect(page).to have_content("Bryan May")
    expect(page).to have_content("Lorem ipsum")
    expect(page).to have_content("Blah blah blah")
  end      
end