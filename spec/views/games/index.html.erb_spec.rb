require 'rails_helper'

RSpec.describe "games/index", type: :view do
  before(:each) do
    assign(:games, [
      Game.create!(
        title: "Title",
        genre: "Genre",
        platform: "Platform",
        media: "Media",
        publisher: "Publisher",
        rating: "Rating",
        vr: false
      ),
      Game.create!(
        title: "Title",
        genre: "Genre",
        platform: "Platform",
        media: "Media",
        publisher: "Publisher",
        rating: "Rating",
        vr: false
      )
    ])
  end

  it "renders a list of games" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Genre".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Platform".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Media".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Publisher".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Rating".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(false.to_s), count: 2
  end
end
