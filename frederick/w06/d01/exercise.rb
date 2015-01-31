require 'rails_helper'

feature "AddingASongToAnArtists", :type => :feature do
  scenario "valid input" do
    artist = Artist.create(
      first_name: "Miley",
      last_name: "Cyrus"
    )
    song = Song.create(
      name: "Wrecking Ball"
    )
    user = User.create(
      email: "info@example.com",
      password: "password",
      admin: true
    )
    
    log_in "info@fluffyjack.com", "password"

    visit '/artists'

    click_link artist.full_name
    click_button "Add songs"
    fill "Search", with: song.name
    click_button "Search"

    check song.name
    click_button "Add to #{artist.full_name}"

    expect(page).to have_content(song.name)
  end
end

feature "EditingAnArtist", :type => :feature do
  scenario "valid input" do
    artist = Artist.create(
      first_name: "Snoop",
      last_name: "Dogg"
    )

    user = User.create(
      email: "info@example.com",
      password: "password",
      admin: true
    )
    
    log_in "info@example.com", "password"

    visit artist_path(artist)

    click_link 'edit'
    fill "first_name", with: "Snoop"
    fill "last_name", with: "Lion"
    click_button "Update"

    expect(page).to have_content("Snoop Lion")
  end
end

# 1. Generate an Artist model with a First Name and Last Name.
# 2. Generate a User model with Email, Password and Admin status. 
# 3. Log in to a User Account with User Email and User Password. (kinda iffy here)
# 4. Create the Artist controller with show, edit and update methods.
# 5. Create a Artist Show page. 
# 6. Code the click_link, first_name, last_name and the click_button "Update" onto the artist show page.
# 6. 
